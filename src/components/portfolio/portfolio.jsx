import React, { useState } from 'react'
import './portfolio.css'
import GIF from '../../assets/comingSoon.gif'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: GIF,
        title: 'E-commerce Website',
        github: 'https://github.com/yigitkarabiyik',
        demo: 'http://yigitkarabiyik.com',
    },
    {
        id: 2,
        image: GIF,
        title: 'Content Management System',
        github: 'https://github.com/yigitkarabiyik',
        demo: 'http://yigitkarabiyik.com',
    },
    {
        id: 3,
        image: GIF,
        title: 'Blog Site',
        github: 'https://github.com/yigitkarabiyik',
        demo: 'http://yigitkarabiyik.com',
    },
    {
        id: 4,
        image: GIF,
        title: 'Social Media App',
        github: 'https://github.com/yigitkarabiyik',
        demo: 'http://yigitkarabiyik.com',
    },
    {
        id: 5,
        image: GIF,
        title: 'Chat Messaging App',
        github: 'https://github.com/yigitkarabiyik',
        demo: 'http://yigitkarabiyik.com',
    },
    {
        id: 6,
        image: GIF,
        title: 'Project Management Dashboard',
        github: 'https://github.com/yigitkarabiyik',
        demo: 'http://yigitkarabiyik.com',
    },
]

const Portfolio = () => {
    return (
        <section>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    {/* <a href={github} className="btn" target="_blank">Github</a> */}
                                    {/* <a href={demo} className="btn btn-primary" target="_blank">Demo</a> */}
                                </div>
                            </article>
                        )
                    }
                    )
                }
            </div>
        </section>
    )

}

export default Portfolio
