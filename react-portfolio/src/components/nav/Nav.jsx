import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GoTools} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  // using a useState to create a active navbar
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" 
      onClick={() => setActiveNav('#')}
      className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><GoTools /></a>
      <a href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}><GoTools /></a>
      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav