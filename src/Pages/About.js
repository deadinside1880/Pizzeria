import React from 'react'
import Multi from '../Assets/multiplePizzas.jpeg'
import '../styles/About.css'
function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${Multi})`}}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>More latin text I have no idea about</p>
            </div>
        </div>
    )
}

export default About
