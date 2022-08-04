import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {RiComputerLine} from 'react-icons/ri'
import {useState} from 'react'


function Nav() {
  const [activeNave, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" title="home" onClick={() => setActiveNav('#')} className={activeNave === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#experience" title="experience" onClick={() => setActiveNav('#skills')} className={activeNave === '#skills' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#skills" title="My work" onClick={() => setActiveNav('#services')} className={activeNave === '#services' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#services" title="services" onClick={() => setActiveNav('#about')} className={activeNave === '#about' ? 'active' : ''}><RiComputerLine/></a>
    </nav>
  )
}

export default Nav