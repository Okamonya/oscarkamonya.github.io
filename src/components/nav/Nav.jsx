import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FcBusinessContact} from 'react-icons/fc'
import {FcAbout} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {GiSkills} from 'react-icons/gi'
import {useState} from 'react'


function Nav() {
  const [activeNave, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNave === '#' ? 'active' : ''}><FcHome/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNave === '#skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNave === '#services' ? 'active' : ''}><FcServices/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNave === '#about' ? 'active' : ''}><FcAbout/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNave === '#contact' ? 'active' : ''}><FcBusinessContact/></a>
    </nav>
  )
}

export default Nav