import React from 'react'
import {IoLogoLinkedin} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io' 

function Social() {
  return (
    <div className='social__media'>
        <a href="https://www.linkedin.com/in/oscar-kamonya-a2607a124/" target="_blank"><IoLogoLinkedin/></a>
        <a href="https://github.com/Okamonya" target="_blank"><IoLogoGithub/></a>
    </div>
  )
}

export default Social