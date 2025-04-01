import React from 'react'
import logo from '../assets/maitri-logo.png';
import { FaUserTie } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import LoginPage from './LoginPage'

const Login = () => {
  return (
    <>
      <div className='flex items-center justify-center '>
      <div className=''>
      <div className='flex  flex-col items-center justify-center login-image'>
        <img src={logo} alt="logo" className='w-[200px]' />
        <p className='login-para'>Please select your role to continue</p>
      </div>
      <div className='flex items-center justify-center gap-11 login-image'>
        <NavLink to="/loginPage"  className={({ isActive }) => (isActive ? "font-bold border-2 border-[#3978ED] rounded-[18px] text-[#3978ED]" : "text-black")}>
        <div className=' w-[120px] h-[100px] flex flex-col items-center justify-center rounded-2xl cursor-pointer shadow-xl '>
          <FaUserTie className='text-2xl'/>
          <p>Recruiter</p>
          </div>
          </NavLink>
          <NavLink to="/companylogin" className={({ isActive }) => (isActive ? "font-bold border-2 border-[#3978ED] rounded-[18px] text-[#3978ED]" : "text-black")}>
        <div className=' w-[120px] h-[100px] flex flex-col items-center justify-center rounded-2xl cursor-pointer shadow-xl'>
          <FaBuilding className='text-2xl'/>
          <p>Company</p>
          </div>
          </NavLink>
          <NavLink to="/loginPage1" className={({ isActive }) => (isActive ? "font-bold border-2 border-[#3978ED] rounded-[18px] text-[#3978ED]" : "text-black")}>
        <div className=' w-[120px] h-[100px] flex flex-col items-center justify-center rounded-2xl cursor-pointer shadow-xl'>
          <FaUserGraduate className='text-2xl'/>
          <p>Candidate</p>
          </div>
          </NavLink>
      </div>
      
      </div>
      
      </div>
      {/* <LoginPage/> */}
      
      </>
    
  )
}

export default Login
