import './projects.css'

const Projects = () => {
	return (
		<section className="contents" id="stick" data-scroll-section>
            <h1
                data-scroll
                data-scroll-speed="5"
                data-scroll-sticky // confines it to the current position on the screen
                data-scroll-target="#stick" // confines it to the current scrolling section
            >
                Hey my name is Sticky. Here are some of my projects
            </h1>
            <p>other contents</p>
        </section>
	);
};

export default Projects;
