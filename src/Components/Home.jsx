import React, { useEffect, useState } from 'react';
import HCard from './HCard';
import CardSlider from './CardSlider';
import BCard from './BCard';
import Footer from './Footer';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import image from '../assets/Mask group.png';
import image2 from '../assets/Mask group (2).png';
import image1 from '../assets/Mask group (1).png';
import svg from '../assets/svg.png';
import i3 from '../assets/i (3).png';
// import video from '../assets/MAITRI_AI INTERVIEW.mp4';
// import './Home.css'
const Home = () => {
  const [visibleElements, setVisibleElements] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    visibleElements.forEach((_, index) => {
      setTimeout(() => {
        setVisibleElements((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, (index + 1) * 400); // 0.4s delay between each element
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='w-full flex '>


        <div className='flex justify-between items-center main w-[100%] '>

          <div className="hero-container w-[50%]  ">
            <h1 className="hero-title">
              UPGRADE YOUR HIRING <br />
              GAME WITH <br />
              <span className="highlight">MAITRI AI INTERVIEWER</span>
            </h1>
            <h2 className='text-3xl mt'>Transform recruitment with AI-driven automation, <br />
              smarter screening, and seamless hiring</h2>
            <NavLink to="/loginPage"><button className="hero-btn">Get started</button></NavLink>
          </div>

          <div className='w-[50%]'>
            <img src={image} alt="" className={`absolute top-40 right-100 w-80 aiimg transition-opacity duration-1000 ${visibleElements[0] ? 'opacity-100' : 'opacity-0'}`} />
            <img src={image2} alt="" className={`absolute top-50 right-15 w-80 aiimg transition-opacity duration-1000 ${visibleElements[1] ? 'opacity-100' : 'opacity-0'}`} />
            <img src={image1} alt="" className={`absolute top-120 right-75 aiimg transition-opacity duration-1000 ${visibleElements[2] ? 'opacity-100' : 'opacity-0'}`} />

            <div className={`transition-opacity duration-1000 ${visibleElements[3] ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className='shadow-2xl text-gray-900 text-lg font-semibold absolute top-30 right-61 rounded-2xl padding '>24/7 Available <span className='flex text-gray-500 text-sm'>Always Ready</span><img src={i3} alt="" className='absolute top-8 left-3' /></h1>
            </div>
            <div className={`transition-opacity duration-1000 ${visibleElements[4] ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className='shadow-2xl text-gray-900 text-lg font-semibold bg-white absolute top-113 right-75 rounded-2xl padding'>Save 80% Time <span className='flex text-gray-500 text-sm'>In Hiring Process</span><img src={i3} alt="" className='absolute top-8 left-3' /></h1>
            </div>
            <div className={`transition-opacity duration-1000 ${visibleElements[5] ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className='shadow-2xl text-gray-900 text-lg font-semibold bg-white absolute top-140 right-165 rounded-2xl padding'>Ai-Powered<span className='flex text-gray-500 text-sm'>Smart Analysis</span><img src={svg} alt="" className='absolute top-8 left-3' /></h1>
            </div>
          </div>

        </div>
      </div>
      <div className='hiring-process'>
        <h1>Transform Your Hiring Process</h1>
        <p>Streamline recruitment with AI-powered tools designed for modern business</p>
      </div>
      <HCard />

      <div className='feature'>
        <h3>Upcoming features</h3>
      </div>
      <CardSlider />

      <div className='work'>
        <div >
          <h3 className='text-blue-900 text-4xl font-bold'>See How It Works</h3>
          <p className='text-gray-500 text-2xl '>Watch AI HR in Action</p>
        </div>
         <div class="w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/12DTDxL5UgKXi-1iA7i9PkeX3A9DQHoLs/preview"
                class="w-180 h-100 border-none"
                allow="autoplay fullscreen">
              </iframe>
            </div>
      </div>

      <BCard />
      <Footer />
    </>
  )
}

export default Home;

