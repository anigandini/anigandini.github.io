import React from 'react';
import "./About.css";
import image from './about.webp';
import NavBar from "./../NavBar/NavBar"; 

const About = () => {
	
	return <div className="about-container">
                <NavBar></NavBar>
                <div className="about-img-container">
                    <img src={image} />
                </div>
                <div class="about-title nes-container is-rounded is-dark with-title">
                        <p>Hi there! Wanna know about me?</p>
                </div>
                <div className="skills-container nes-container is-rounded is-dark with-title">
                    <p class="title">Skills</p>
                    <div className="stat">
                        <div href="#" class="nes-badge">
                            <span class="is-primary">is</span>
                        </div>
                    </div>
                    <div className="stat">
                        JAVASCRIPT 
                        <i class="nes-icon is-large heart"></i>
                    </div>
                </div>
            </div>
};

export default About;