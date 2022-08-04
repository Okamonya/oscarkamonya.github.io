import React from 'react'
import './footer.css'
import {IoLogoLinkedin} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io'
import {FiMail} from 'react-icons/fi'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>OSCAR</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
      </ul>

      <div className="footer__social">
      <a href="https://www.linkedin.com/in/oscar-kamonya-a2607a124/" target="_blank"><IoLogoLinkedin/></a>
        <a href="https://github.com/Okamonya" target="_blank"><IoLogoGithub/></a>
          <a href="mailto:oscarkamoya@gmail.com"><FiMail/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; OSCAR KAMONYA. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer