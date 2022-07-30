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
              <small>1+ Years Working</small>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro quia, laudantium aspernatur sed incidunt iste, quasi maiores voluptatum, necessitatibus veritatis itaque illum aliquid aliquam eveniet dolores! Corrupti repudiandae veritatis modi asperiores dolorum, reprehenderit velit ab cum expedita dolores minima doloribus saepe amet omnis optio obcaecati. Quia odit quae laborum.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About