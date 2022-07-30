import React from 'react'
import './footer.css'
import {IoLogoLinkedin} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>OSCAR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer__social">
      <a href="https://www.linkedin.com/in/oscar-kamonya-a2607a124/" target="_blank"><IoLogoLinkedin/></a>
        <a href="https://github.com/Okamonya" target="_blank"><IoLogoGithub/></a>
          <a href="https://likedin.com"></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; OSCAR Web Developer. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer