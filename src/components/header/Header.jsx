import React from 'react'
import './header.css'
import CTA from './CTA'
import Profile from '../../assets/mee.png'
import Social from './Social'

function Header() {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Oscar Kamonya</h1>
        <h5 className="text-light">Java Web Developer</h5>
        <CTA/>
        <Social/>

        <div className="profile">
          <img src={Profile} alt=""/>
        </div>

        <a href="#footer" className='scroll__down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

export default Header