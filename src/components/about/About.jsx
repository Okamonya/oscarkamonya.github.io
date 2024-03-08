import React from 'react'
import './about.css'
import mee1 from '../../assets/mee1.png'
import {RiComputerLine} from 'react-icons/ri'
import {FaUsers} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={mee1} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <RiComputerLine className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>clients</h5>
              <small>5+</small>
            </article>
            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>7+ projects</small>
            </article>
          </div>
          <p id='contact'>
          Hi, I'm Oscar. I'm a multitalented person with just over 4 years of experience. Highly motivated, fueled by high energy levels and boundless tech enthusiasm. I don't define myself by the work I've done, rather I define myself by what I want to do. I work to make better solutions; that is fast, easy to use, beautiful, efficient, accessible, and responsive. I focus more on building Java web apps but recently I have been crossing borders to expand my knowledge.
I prefer to keep learning, continue challenging myself, and do interesting things that matter.
          </p>

          <a href="mailto:oscarkamonya@gmail.com" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
