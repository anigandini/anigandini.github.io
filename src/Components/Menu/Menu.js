import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Menu.css";
import "nes.css/css/nes.min.css";

const Menu = () => {
	const [menuState, setMenuState] = useState(false);

	const openMenu = () => {
		setMenuState(true);
	}

	if (!menuState) {
    	return 		<label>
						<a onClick={openMenu}>
							<input type="radio" className="nes-radio is-dark" name="answer-dark" checked />
							<span>Start</span>
						</a>
					</label>
	} else {
			return (
				<div className="nes-container is-rounded is-dark with-title">
					<p class="title">OPTIONS</p>
					<ul className="nes-list is-disc">
						<Link to="/about">
							<li>
								Player
							</li>
						</Link>
						<Link to="/portfolio">
							<li>
								Projects
							</li>
						</Link>
						<Link to="/contact">
							<li>
								Contact
							</li>
						</Link>
					</ul>
				</div>
			);
	}
}

export default Menu;
		



