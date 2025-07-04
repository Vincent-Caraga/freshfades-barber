import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <>
    <div className='about-us'>
        <h2 className='about-us-title'>About Us</h2>
        <h4 className='about-us-active'>The Commune for Active Gentlemens</h4>
        <p className='about-us-param'>We are all fun and games until we grew into being the 
          comfort and community of dashing, industrious, and on-the-go gentlemen. Knowing that 
          they have been taking on the greatest games of their lives during the day, we
          offer and pamper them with relaxing and value for money professional grooming services
          together with top spot quality products on their free time. A true gentleman knows that 
          he deserves the best in everything he does. If you are one, you might have found your 
          chair at FreshFades.</p>
        <img src={assets.man_shave} alt="" />
        <img src={assets.man_cut} alt="" />
        <img src={assets.men_shampoo} alt="" />
    </div>
    </>
  )
}

export default AboutUs
