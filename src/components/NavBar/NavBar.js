import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.css' ;
import logo from '../../assets/lg.png';
import contact from '../../assets/contact.png'
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'
import fb from '../../assets/facebook-icon.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import email from '../../assets/email.png'

const NavBar = () => {
const [showMenu ,setShowMenu]=useState(false)

  return (
   <nav className='navbar'>
    <img src={logo} className='logo' alt='' />
    <div className='desktopmenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistItem'>Home </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenulistItem'>About </Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500}className='desktopMenulistItem'>Projects </Link>
    </div>
    <div className='links'>
                <a href="https://www.facebook.com/ahmedbenkhlifa.jaidi" target='_blank' rel='noreferrer'><img src={fb} alt="Fb" className='link' /></a>
                <a href="https://www.linkedin.com/in/ahmed-jaidi-65357a1ba/" target='_blank' rel='noreferrer'><img src={linkedin} alt="Ln" className='link' /></a>
                <a href="https://github.com/ahmedjd499" target='_blank' rel='noreferrer'><img src={github} alt="GH" className='link' /></a>
                <a href="mailto:ahmedjaidi4@gmail.com" target='_blank' rel="noreferrer" ><img src={email} alt="Email" className='link' /></a>
    </div>
    <button className='desktopMenuBtn'  onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
        <img src={contact} alt=''className='desktopMenuImg'/> Contact Me
    </button>



    <img src={showMenu?close:menu} className='mobMenu' alt='menu'  onClick={()=>setShowMenu(!showMenu)} />
    <div className='navMenu' style={{display : showMenu?'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home </Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>About </Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Projects </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className='listItem' onClick={()=>setShowMenu(false)}>Contact </Link>
        <div className='linksMob'>
                <a href="https://www.facebook.com/ahmedbenkhlifa.jaidi" target='_blank' rel='noreferrer'><img src={fb} alt="Fb" className='linkMob' /></a>
                <a href="https://www.linkedin.com/in/ahmed-jaidi-65357a1ba/" target='_blank' rel='noreferrer'><img src={linkedin} alt="Ln" className='linkMob' /></a>
                <a href="https://github.com/ahmedjd499" target='_blank' rel='noreferrer'><img src={github} alt="GH" className='linkMob' /></a>
                <a href="mailto:ahmedjaidi4@gmail.com" target='_blank' rel="noreferrer" ><img src={email} alt="Email" className='linkMob' /></a>
    </div>
    </div>
    
   </nav>
  )
}

export default NavBar