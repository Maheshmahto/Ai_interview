import React from 'react'
import Login from './Login'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../helper/Axios"; // Ensure the correct path
import Swal from 'sweetalert2';
const CompanyLoginPage = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person_name: '',
    business_email: '',
    phone_number: '',
    company_description: '',
    company_website: '',
    company_size: '',
    company_location: "",
    Industry:'',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state on form submission
    setSuccessMessage(''); // Reset success message

    try {
      const response = await axios.post('/api/companies/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Assuming success if response status is 200 or 201
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Message Sent successfully!');
        // console.log('Response:', response.data);
        
        Swal.fire({
          title: 'Message Sent successfully!',
          text: 'Your message has been sent successfully and is being processed. Kindly wait for further response.',
          icon: 'success',
          confirmButtonText: 'OK',
          
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/");
          }
        });

      }
    } catch (err) {
      console.error('Error:', err);

      // Handle Axios error response
      if (err.response && err.response.status === 422) {
        // Handle validation errors
        const errorMessages = err.response.data.detail || [];
        setError(errorMessages.join(', ') || 'Validation failed.');
      } else {
        setError('Something went wrong, please try again later.');
      }
    }
  };
  const handleChange = (field,value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  return (
    <>
      <Login />
    
      <div className='flex items-center justify-center '>
      {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className=' w-[850px] h-[750px] rounded-2xl shadow-2xl  login-page comp-login-page' autocomplete="off" >
          <div className='flex flex-col items-center justify-center login1-page'>
            <div>
              <div className='flex items-center justify-between gap-12'>
                <div className='flex flex-col'>
                  <label htmlFor="companyName" className='text-xl'>Company Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="company_name"
                    id="companyName"
                    placeholder="Enter Company Name"
                    required
                    value={formData.company_name}

                    onChange={(e) => handleChange("company_name", e.target.value)}

                    className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                </div>
                <div className='flex flex-col'>
                  <label className='text-xl' htmlFor="contactName" >Contact Person Name<span className="text-red-500">*</span></label>
                  <input
                     type="text"
                     name="contact_person_name"
                     id="contactName"
                    placeholder="Enter full name"
                    value={formData.contact_person_name}
                    onChange={(e) => handleChange("contact_person_name", e.target.value)}

                    required
                    className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                  />
                </div>
              </div>

              <div className='flex flex-col login2-page'>
                <div className='flex items-center justify-between gap-12'>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Business Email<span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="business_email"
                      id="email"
                      value={formData.business_email}
                      onChange={(e) => handleChange("business_email", e.target.value)}
                      placeholder="Enter Business email"
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Phone Number<span className="text-red-500">*</span></label>
                    <input
                         type="tel"
                         name="phone_number"
                         id="phone"
                         pattern="\d{10}" // Enforces exactly 10 digits
                         maxLength={10}
                      placeholder="Enter Phone Number"
                      value={formData.phone_number}
                      onChange={(e) => handleChange("phone_number", e.target.value)}
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col login2-page'>
                <div className='flex items-center justify-between gap-12'>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Company Website<span className="text-red-500">*</span></label>
                    <input
                       type="url"
                       name="company_website"
                       id="website"
                      placeholder="https://example.com"
                      value={formData.company_website}
                      onChange={(e) => handleChange("company_website", e.target.value)}
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Company Size<span className="text-red-500">*</span></label>
                    <select
                      name="company_size"
                  id="size"
                      required
                      value={formData.company_size}
                      onChange={(e) => handleChange("company_size", e.target.value)}
                      class="shift-placeholder writeText w-[350px] h-[60px] p-2 border-2 border-gray-500 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select Company Size</option>
                      <option value="1-10">1 - 10 employees</option>
                      <option value="11-50">11 - 50 employees</option>
                      <option value="51-200">51 - 200 employees</option>
                      <option value="201-500">201 - 500 employees</option>
                      <option value="500+">500+ employees</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='flex flex-col login2-page'>
                <div className='flex items-center justify-between gap-12'>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Industry Type<span className="text-red-500">*</span></label>
                    <input
                       type="text"
                       name="Industry"
                       id="website"
                      placeholder="e.g IT or Healthcare"
                      value={formData.Industry}
                      onChange={(e) => handleChange("Industry", e.target.value)}
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                  <div className='flex items-center justify-between gap-12'>
                  <div className='flex flex-col'>
                    <label className='text-xl'>Company Location<span className="text-red-500">*</span></label>
                    <input
                       type="text"
                       name="company_location"
                      //  id="website"
                      placeholder="e.g Mumbai or Delhi"
                      value={formData.company_location}
                      onChange={(e) => handleChange("company_location", e.target.value)}
                      required
                      className="shift-placeholder writeText w-[350px] h-[60px] mt-1 p-2  border-2 border-black-500 rounded-md placeholder-gray-500 placeholder:text-lg"
                    />
                  </div>
                
                </div>
                
                </div>
                
              </div>
              <div className='flex flex-col login2-page'>
                
              </div>
              <div>
                <div className='flex flex-col comp-login'>
                  <label className='text-xl'>Company Description<span className="text-red-500">*</span></label>
                  <textarea
                      name="company_description"
                id="description"
                    placeholder="Tell us about your company.."
                    required
                    value={formData.company_description}
                    onChange={(e) => handleChange("company_description", e.target.value)}
                    className=" shift-placeholder writeText company-descp w-[750px] h-[120px] mt-1 p-2 border-2 border-black-500 rounded-md placeholder-gray-500 "
                  ></textarea>
                </div>

              </div>

            </div>
            <div className='login-btn'>
              <button
                type="submit"
                className="w-[220px] h-[50px] mt-5 text-xl bg-gradient-to-br from-[#6363f3] to-[#f531d1] text-white rounded-md transition duration-200 px-4 py-3 cursor-pointer flex items-center justify-center space-x-2"
              >
                Submit Application <FaLongArrowAltRight />
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default CompanyLoginPage
