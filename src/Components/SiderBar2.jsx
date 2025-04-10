import React from 'react'
import { NavLink } from "react-router-dom";
import { useLogin } from '../auth/LoginContext';
import logo from '../assets/logo.png'
const SiderBar2 = () => {
    const { logout } = useLogin();
  
  const handlelogut = () => {
    logout();

  }
  return (
    <div>
     <aside className="fixed top-0 left-0 w-72 text-black flex flex-col h-screen">
  <div className="p-4 flex items-center space-x-4 adminlogo">
    <img src={logo} alt="Logo" className="w-[250px]" />
  </div>
  <nav className="flex-grow mt-6 list-none flex flex-col gap-8 text-xl adminlogo1">
    <li>
      <NavLink 
        to="/admin_business_msg" 
        className={({ isActive }) => isActive ? "activeside adminnav block p-2 rounded" : "adminnav block p-2 rounded"}
        end
      >
        Business Message
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/all_users" 
        className={({ isActive }) => isActive ? "activeside adminnav block p-2 rounded" : "adminnav block p-2 rounded"}
      >
        All Users
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/hr_Total_ResumeUploaded" 
        className={({ isActive }) => isActive ? "activeside adminnav block p-2 rounded" : "adminnav block p-2 rounded"}
      >
        HR Activity
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/All_hr_candidate_report" 
        className={({ isActive }) => isActive ? "activeside adminnav block p-2 rounded" : "adminnav block p-2 rounded"}
      >
        All HR Candidates
      </NavLink>
    </li>
  </nav>
  <div className="flex items-center space-x-2 ml-4 mb-6">
    <button onClick={handlelogut}>Logout</button>
  </div>
</aside>
    </div>
  )
}

export default SiderBar2
