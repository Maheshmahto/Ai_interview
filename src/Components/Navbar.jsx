import React from 'react'
import logo from '../assets/maitri-logo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
      <img src={logo} alt="logo" />

      <NavLink to="/login"><button className='btndemo'>Book a Demo</button></NavLink>
    </div>
  )
}

export default Navbar
