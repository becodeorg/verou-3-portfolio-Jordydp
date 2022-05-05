import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiWhatsappLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>jdepril@outlook.com</h5>
          <a href="mailto:jdepril@outlook.com">Send a Message</a>
        </article>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>jordy De Pril</h5>
          <a href="https://m.me/jordy.depril.9">Send a Message</a>
        </article>
        <article className='contact__option'>
          <RiWhatsappLine className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>+32492067756</h5>
          <a href="https://api.whatsapp.com/send?phone+320492067756" target='_blank'>Send a Message</a>
        </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Enter Your Message Here' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact