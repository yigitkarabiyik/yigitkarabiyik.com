import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const headerSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" targer="_blank"><BsLinkedin /></a>
            <a href="https://github.com" targer="_blank" className=""><FaGithub /></a>
            <a href="https://instagram.com" targer="_blank" className=""><FiInstagram /></a>
        </div>
    )
}

export default headerSocials