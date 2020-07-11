import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";
import "nes.css/css/nes.min.css";

const NavBar = () => {
    	return 	<div className="nes-list is-disc navbar-container">
                    <Link className="navbar-link" to="/about">
                        Player
                    </Link>
                    <Link className="navbar-link" to="/portfolio">
                        Projects
                    </Link>
                    <Link className="navbar-link" to="/contact">
                        Contact
                    </Link>
                </div>
}

export default NavBar;