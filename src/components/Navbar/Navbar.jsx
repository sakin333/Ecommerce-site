import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import CustomButton from '../CustomButtons/CustomButton'
import { FaCircleNodes } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header className='site-header'>
        <nav className='navigation-bar'>
            <div className='site-logo-container'>
                <a href='/' className='site-logo'>Fcomm<FaCircleNodes className='site-icon'/></a>
            </div>
            <div className='site-navigation-container'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/newarrivals'>New Arrivals</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
            <div className='site-login-signup-container'> 
                <CustomButton name='Login' type='secondary' />
                <CustomButton name='Sign Up' type='primary' />
            </div>
        </nav>
    </header>
  )
}

export default Navbar