import React from 'react';
import "./Home.css";
import Menu from "./../Menu/Menu";

const Home = () => {
	
	return <div className="home-container">
					<div className="title-container">
						<span className="home-text">Ani Gandini's</span>
						<h3 className="home-title pink-title">FRONT END</h3>
						<h3 className="home-title yellow-title">ADVENTURES</h3>
					</div>
					<Menu></Menu>
					<span className="home-text">© 1995 WEB DEVELOPER BASED IN BUENOS AIRES</span>
				</div>
};

export default Home;