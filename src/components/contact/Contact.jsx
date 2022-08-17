import React from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineWhatsApp, AiOutlineLinkedin} from 'react-icons/ai'
import emailjs from 'emailjs-com'

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

      emailjs.sendForm('service_2glm3k2', 'template_955906c', e.target, 'shrL3e2Vbkmbfcg-j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className="contact__options">
          <article className='contact__option'>
          <AiOutlineMail className='contact__optio-icon'/>
            <h4>Email</h4>
            
            <a href="mailto:oscarkamonya@gmail.com" >Send A Message</a>
          </article>
          <article className='contact__option'>
          <AiOutlineLinkedin className='contact__optio-icon'/>
            <h4>LinkedIn</h4>
            
            <a href="https://www.linkedin.com/in/oscar-kamonya-a2607a124/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BebNHQLapTsOMiDGuXRJaQw%3D%3D" target="_blank">Send A Message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__optio-icon'/>
            <h4>WhatsApp</h4>
            
            <a href="https://api.whatsapp.com/send?phone+254729039813" target="_blank">Send A Message</a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='enter your full name' required/>
          <input type="email" name='email' placeholder='enter your email' required/>
          <textarea name="message" cols="30" rows="10" placeholder='enter your massage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact