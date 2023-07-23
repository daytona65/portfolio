import './header.css';
import Socials from './socials';
import Biography from './biography';

const Header = () => {
	return (
		<header id='header'>
			<div className="container header__container">
				<h2> Hello, I am </h2>
				<h1>Nicholas</h1>
				<h2 className="text-light">Software Engineer</h2>
				<Socials/>
				<Biography/>
			</div>
		</header>
	);
};

export default Header;