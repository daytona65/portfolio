import './about.css';
import {FaBriefcase, FaCode, FaCodeBranch} from 'react-icons/fa';

const About = () => {
	return (
		<section
			className="about__section"
            data-scroll
			data-scroll-section
			id='about' // For navigation
		>
			<div className="container about__container"
				data-scroll
				data-scroll-speed="9">
                <div className="about__content">
                    <div className="about__cards">
						<article className="about__card">
							<FaBriefcase className="about__icon"/>
							<h5>Experience</h5>
							<small>2 years of internships and projects</small>
						</article>
						<article className="about__card">
							<FaCode className="about__icon"/>
							<h5>Projects</h5>
							<small>5+ projects and hackathons</small>
						</article>
						<article className="about__card">
							<FaCodeBranch className="about__icon"/>
							<h5>Github</h5>
							<small>1000+ contributions</small>
						</article>
					</div>
                </div>
			</div>
		</section>
	);
};

export default About;