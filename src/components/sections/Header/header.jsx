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
				stagger: .00,
			}, "<")
			.to(splitTitle.chars, {
				opacity: 0,
				y: -10,
				rotateX: 90,
				stagger: .00,
			}, "<1")
		})
		timeline.repeat(-1);
	}, []);
	
	return (
		<header id='header'>
			<div className="container header__container">
				{/* {Explode("Nicholas")} */}
				<h2 className='header__name'>NICHOLAS HALIM</h2>
				<div className='container header__titles'>
					<p className="header__title">Software Engineering</p>
					<p className="header__title">Mobile Development</p>
					<p className="header__title">Videography</p>
					<p className="header__title">Creative</p>
					<p className="header__title">Product Management</p>
					<p className="header__title">Data Analyst</p>
				</div>
				{/* <video autoPlay loop muted playsinline>
					<source src={gifUrl} type="video/mp4" />
					Your browser does not support video.
           		</video> */}

				{/* <iframe 
					className="background-video" 
					src={gifUrl} 
					allow="autoPlay"
					allowTransparency
					loading='lazy'
					seamless
					frameborder="0"
					muted
					width={560}
					height={315}
					loop
					title="Google Drive Video"
				></iframe> */}
			</div>
		</header>
	);
};

export default Header;