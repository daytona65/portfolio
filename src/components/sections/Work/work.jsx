import React, { useState, useEffect, useRef  }from 'react';
import { Marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import './work.css';
import { CSSTransition } from 'react-transition-group';
import styled, { ThemeProvider } from 'styled-components';

const Work = () => {
	const jobData = [	
		{
			title: 'Software Engineer Intern',
			company: 'Thales',
			location: 'Singapore',
			range: 'May 2023 - August 2023',
			url: 'https://www.thalesgroup.com/en/digital-identity-and-security',
			description: [
				"Implement new features and bug fixes in Java with stringent unit-testing to continuously improve user experience for internal tools used in Thales DIS.",
				"Help with code review of other full-time software engineers’ code to maintain code quality and ensure correct implementation of features.",
				"Involved in DevOps software development cycles in a team of software engineers including sprint planning and backlog refinement to scope tasks for future sprints.",
				"Refactor thousands of lines of legacy code to improve code readability and ensure adherence to good software engineering principles.",
			],
		},

		{
			title: 'Teaching Assistant',
			company: 'NUS School of Computing',
			location: 'Singapore',
			range: 'January 2023 - April 2023',
			url: 'https://nus.edu.sg/careers/teaching.html',
			description: [
				"Taught two tutorial classes of a total of 23 students for CS2100 Computer Organisation, a course on the concepts of MIPS Architecture",
				"Guided students through tutorials and assignments with a gamified learning system to make learning enjoyable",
				"Graded their assignments and projects while providing constructive feedback afterwards.",
			],
		},

		{
			title: 'Blockchain Developer',
			company: 'NUS Fintech Society',
			location: 'Singapore',
			range: 'Aug 2022 - Apr 2023',
			url: 'https://fintechsociety.comp.nus.edu.sg/',
			description: [
				"Developed the front-end of an on-chain subscription web application to help clients accept crypto for subscription-based services.",
				"Participate in weekly club meetings to discuss the latest happenings in the Blockchain space.",
			],
		},

		{
			title: 'Junior Full Stack Developer',
			company: 'ServerSam',
			location: 'Singapore',
			range: 'May 2022 - July 2022',
			url: 'https://serversam.com/',
			description: [
				"Developed websites for e-commerce businesses on the ASP.NET framework with SQL Server Management studio databases in Javascript, C#, HTML, CSS",
				"Worked with other interns to implement features and resolve bug tickets.",
			],
		},
	];	

	const [activeIndex, setActiveIndex] = useState(0);
	const tabs = useRef([]);

	return (
		<div id="work" className="container work__container">
            <h3 className="work__header">Where I've Worked</h3>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<div className="job">
				<div className="job__TabList" role="tablist" aria-label="Job tabs">
					{jobData.map((job, index) => {
						const { company } = job;
						return (
							<div
								className={activeIndex === index ? "job__TabButton_isActive" : "job__TabButton"}
								key={index}
								isActive={activeIndex === index}
								onClick={() => setActiveIndex(index)}
								ref={el => (tabs.current[index] = el)}
								id={`tab-${index}`}
								role="tab"
								tabIndex={activeIndex === index ? '0' : '-1'}
								aria-selected={activeIndex === index ? true : false}
								aria-controls={`panel-${index}`}
								>
								<h2>{company}</h2>
							</div>
						);
					})}
					<div className="job__Highlight" style={{ 'activeTabId': activeIndex }}/>
				</div>

				<div className="job__TabPanels">
					{jobData.map((job, index) => {
						const { title, company, location, range, url, description } = job;
						return (
							<CSSTransition key={index} in={activeIndex === index} timeout={5000} classNames="fade">
								<div
									className="job__TabPanel"
									id={`panel-${index}`}
									role="tabpanel"
									tabIndex={activeIndex === index ? '0' : '-1'}
									aria-labelledby={`tab-${index}`}
									aria-hidden={activeIndex !== index}
									hidden={activeIndex !== index}>
									<h3>
										<span>{title}</span>
										<span className="company">
											&nbsp; @ &nbsp;
											<a href={url} className="inline-link" target="_blank">
												{company}
											</a>
										</span>
									</h3>

									<p className="range">{range}</p>
									<ul>
										{description.map((point, index) => (
											<li key={index}>{point}</li>
										))}
									</ul>
								</div>
							
							</CSSTransition>
						);
					})}
				</div>
			</div>

			<div className='job__mobile'>
				{jobData.map((job, index) => {
					const { title, company, location, range, url, description } = job;
					return (
						<div
							className="job__TabPanel"
							>
							<h3>
								<span>{title}</span>
								<span className="company">
									&nbsp; @ &nbsp;
									<a href={url} className="inline-link" target="_blank">
										{company}
									</a>
								</span>
							</h3>

							<p className="range">{range}</p>
							<ul>
								{description.map((point, index) => (
									<li key={index}>{point}</li>
								))}
							</ul>
						</div>
					);
				})}
				
			</div>
        </div>
	);
};

export default Work;