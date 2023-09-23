import React, { useRef } from 'react';
import './contact.css'
import fb from '../../assets/facebook-icon.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/email.png'
import emailjs from '@emailjs/browser';
import toast,{ Toaster } from 'react-hot-toast'



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qp7pkom', 'template_9lzmvce', form.current, '9_ZsgNTs9fwwm3Qi0')
      .then((result) => {
        toast.success('the Email has been sent successfully')
        document.getElementById('name').value=''
        document.getElementById('email').value=''
        document.getElementById('msg').value=''

      }, (error) => {
        toast.error('an error  has occured, please try again')
      });
  };

  return (
    <section id='contact'>
       <Toaster></Toaster>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill the form below to discuss any work opportunities</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail} >
            <input className='name' type="text" placeholder='Enter your name...'name='from_name' required id='name'/>
            <input className='email' type="email" placeholder='Enter your Email...'name='from_email' required id='email'/>
            <textarea className='message' name='message' rows="5" placeholder='Enter your message'required id='msg'></textarea>
            <button className='submitBtn' type='submit' value='send'>Send</button>
            <div className='links'>
                <a href="https://www.facebook.com/ahmedbenkhlifa.jaidi" target='_blank' rel='noreferrer'><img src={fb} alt="Fb" className='link' /></a>
                <a href="https://www.linkedin.com/in/ahmed-jaidi-65357a1ba/" target='_blank' rel='noreferrer'><img src={linkedin} alt="Ln" className='link' /></a>
                <a href="https://github.com/ahmedjd499" target='_blank' rel='noreferrer'><img src={github} alt="GH" className='link' /></a>
                <a href="mailto:ahmedjaidi4@gmail.com" target='_blank' rel="noreferrer" ><img src={email} alt="Email" className='link' /></a>
            </div>
        </form>
    </section>
  )
}
