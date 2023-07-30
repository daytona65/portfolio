import './header.css';

const Header = () => {
	return (
		<header id='header'>
			<div className="container header__container">
				<h2> Hello, I am </h2>
				<h1>Nicholas</h1>
				<h2 className="text-light">Software Engineer</h2>
			</div>
		</header>
	);
};

export default Header;