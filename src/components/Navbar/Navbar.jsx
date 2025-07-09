import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>FreshFades</div>
        {/*<div className='menu-toggle' onClick={toggleMenu()}>☰</div>*/}
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">BOOK NOW</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
