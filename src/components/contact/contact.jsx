import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Contact</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>yigitkarabiyik8@gmail.com</h5>
                        <a href="mailto:yigitkarabiyik8@gmail" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>Linkedin</h4>
                        <h5>yigitkarabiyik</h5>
                        <a href="https://linkedin.com/in/yigit-karabiyik" target="_blank">My profile</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )

}

export default Contact
