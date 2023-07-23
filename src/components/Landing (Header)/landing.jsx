import './landing.css';

const Landing = () => {
	return (
		<section
			className="landing-section"
            data-scroll
			data-scroll-section
			data-scroll-speed="3"
		>
			<div data-scroll className="landing-top">
                <p className="top">
                    Hi! I am
                </p>
				<h1 data-scroll data-scroll-speed="3">
					Jacky chan
				</h1>
                <p>
                    And I love to fite
                </p>
			</div>
		</section>
	);
};

export default Landing;