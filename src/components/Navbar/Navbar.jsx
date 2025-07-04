import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>FreshFades</div>
        {/*<div className='menu-toggle' onClick={toggleMenu()}>☰</div>*/}
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">BRANCHES</a></li>
            <li><a href="#">BOOKNOW</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
