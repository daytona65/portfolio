import './header.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

const Explode = name => {
	const text = name.split("");
	const spans = text.map((letter, index) => (
		<span key={`letter-${index}`} className="letter">
		  {letter}
		</span>
	));
	return <h1 className='header__name'>{spans}</h1>
};

const Header = () => {
	useEffect(() => {
		const titles = gsap.utils.toArray('.header__title');
		const timeline = gsap.timeline();
		
		titles.forEach(title => {
			const splitTitle = new SplitTextJS(title);
			timeline.from(splitTitle.chars, {
				opacity: 0,
				y: 30,
				rotateX: -90,
				stagger: .02,
			}, "<")
			.to(splitTitle.chars, {
				opacity: 0,
				y: -10,
				rotateX: 90,
				stagger: .02,
			}, "<1")
		})
		timeline.repeat(-1);
	}, []);
	
	return (
		<header id='header'>
			<div className="container header__container">
				<h2> Hello, I am </h2>
				{Explode("Nicholas")}
				<div className='header__titles'>
					<p className="header__title">Software Engineer</p>
					<p className="header__title">Java Developer</p>
					<p className="header__title">Videographer</p>
					<p className="header__title">Creative</p>
					<p className="header__title">Team Leader</p>
					<p className="header__title">Problem Solver</p>
				</div>
			</div>
		</header>
	);
};

export default Header;