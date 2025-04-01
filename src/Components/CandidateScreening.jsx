import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FaCloudArrowUp } from "react-icons/fa6";
import axios from "../helper/Axios";
import ResumeResults from "./ResumeResults";
import ProfileCard from "./ProfileCard";
import './CandidateScreening.css';
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import { useFormStatus } from "react-dom";

const CandidateScreening = () => {
  const [formData, setFormData] = useState({
    job_title: "",
    job_description: "",
    upload_resumes: null,
  });
  const [results, setResults] = useState([]);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const token = localStorage.getItem("token");

  const toggleProfileCard = () => {
    setShowProfileCard(!showProfileCard);
  };

  const upLoadResume = async () => {
    if (!formData.job_title) {
      Swal.fire({ text: "Please enter a job title.", icon: "warning" });
      return;
    }
    if (!formData.job_description) {
      Swal.fire({ text: "Please enter a job description.", icon: "warning" });
      return;
    }
    if (!formData.upload_resumes) {
      Swal.fire({ text: "Please select a file before submitting.", icon: "warning" });
      return;
    }

    const uploadData = new FormData();
    uploadData.append("job_title", formData.job_title);
    uploadData.append("job_description", formData.job_description);
    uploadData.append("upload_resumes", formData.upload_resumes);

    try {
      const response = await axios.post("/api/resume_upload/", uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setResults(response.data);
      Swal.fire({ text: "Resume uploaded successfully!", icon: "success" });
    } catch (e) {
      console.error("Upload error:", e);
      Swal.fire({ text: "Failed to upload resume.", icon: "error" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({ ...prev, upload_resumes: file }));
    setSelectedFile(file?.name || null);
  };

  return (
    <div className="candidate-screening-container">
      <Sidebar />
      <div className="main-content">
        {/* Header Section */}
        <div className="header-section">
          <div>
            <h1>Candidate Screening</h1>
            <p className="subtitle">Upload and screen candidate resumes</p>
          </div>
          
          {/* Profile Icon with Positioned ProfileCard */}
          <div className="relative">
            <div 
              className="profile-icon-container" 
              onClick={toggleProfileCard}
            >
              <CgProfile color="hotpink" size={40} />
            </div>
            
            {showProfileCard && (
              <div className="profile-card-position">
                <ProfileCard onClose={toggleProfileCard} />
              </div>
            )}
          </div>
        </div>

        {/* Form Section */}
        <div className="form-container">
          {/* Left Side - Job Details */}
          <div className="job-details-section">
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                placeholder="Enter job title"
                value={formData.job_title}
                onChange={(e) => setFormData({...formData, job_title: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Job Description</label>
              <textarea
                placeholder="Enter job description"
                value={formData.job_description}
                onChange={(e) => setFormData({...formData, job_description: e.target.value})}
              />
            </div>
          </div>

          {/* Right Side - File Upload */}
          <div className="upload-section">
            <div className="upload-box">
              <FaCloudArrowUp className="upload-icon" />
              <h3>Upload Resumes</h3>
              <p>Drag & drop your resumes or click to browse</p>
              <p className="file-types">Supports PDF, DOC, DOCX</p>
              <input
                type="file"
                id="resume-upload"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              <label htmlFor="resume-upload" className="upload-button">
                Choose File
              </label>
              {selectedFile && <p className="selected-file">Selected: {selectedFile}</p>}
            </div>
            <button className="submit-button" onClick={upLoadResume}>
              Submit
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results.length > 0 && <ResumeResults results={results} />}
      </div>
    </div>
  );
};

export default CandidateScreening;