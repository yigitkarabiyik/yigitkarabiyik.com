import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">YIGIT KARABIYIK</a>

            <ul className="permalinks">
                <li href="#">Home</li>
                <li href="#about">About</li>
                <li href="#experience">Experience</li>
                <li href="#services">Services</li>
                <li href="#portfolio">Portfolio</li>
                <li href="#testimonials">Testimonials</li>
                <li href="#contact">Contact</li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com"><FaFacebookF /></a>
                <a href="https://www.instagram.com"><FiInstagram /></a>
                <a href="https://www.twitter.com"><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Yigit Karabiyik Portfolio. All rights reserved</small>
            </div>
        </footer>
    )

}

export default Footer
