import React from 'react';
import { Link } from 'react-scroll';
import './NavBar.css' ;
import logo from '../../assets/lg.png';
import contact from '../../assets/contact.png'


const NavBar = () => {
  return (
   <nav className='navbar'>
    <img src={logo} className='logo' alt='' />
    <div className='desktopmenu'>
        <Link className='desktopMenulistItem'>Home </Link>
        <Link className='desktopMenulistItem'>About </Link>
        <Link className='desktopMenulistItem'>Projects </Link>
        <Link className='desktopMenulistItem'>Contact </Link>

    </div>
    <button className='desktopMenuBtn'>
        <img src={contact} alt=''className='desktopMenuImg'/> Contact Me
    </button>
   </nav>
  )
}

export default NavBar