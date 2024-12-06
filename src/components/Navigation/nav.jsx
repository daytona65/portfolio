import './nav.css';
import React from 'react';
import {useState} from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';

const Navigation = () => {
	const [activeNav, setActiveNav] = useState('#'); // Active states allow you to modify CSS if the button is active or not.
	// Default useState is set to '#' which is the home page.
	return (
		<nav>
			<a href="#header" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
			<a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
			<a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Icon  </a>
			<a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Icon  </a>
		</nav>
	);
};

export default Navigation;