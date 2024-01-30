import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiProductHuntLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActieNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActieNav('#')} className={activeNav == '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href="#about" onClick={() => setActieNav('#about')} className={activeNav == '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActieNav('#experience')} className={activeNav == '#experience' ? 'active' : ''}><BiBook /></a>
            <a href="#services" onClick={() => setActieNav('#services')} className={activeNav == '#services' ? 'active' : ''}><RiProductHuntLine /></a>
            <a href="#contact" onClick={() => setActieNav('#contact')} className={activeNav == '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )

}

export default Nav
