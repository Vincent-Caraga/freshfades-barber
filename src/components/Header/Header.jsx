import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


const Header = () => {
  return (
    <div className='background'>
      <img src={assets.background}alt="" />
      <h2 className='title'>Welcome to FreshFades</h2>
    </div>

    
  )
}

export default Header
