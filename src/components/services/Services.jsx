import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Creation of websites for corporate presentation and brand building. Ensuring all websites have an easy-to-use page editor for dynamic content management.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Providing ecommerce solutions for B2C, and marketplace business models.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Customized Java-based Web Application Development. Building web apps for efficient management of different business activities. Also applying smart automation to streamline workflows and integrate systems together.</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Website maintenance.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services