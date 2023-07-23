import React from 'react';
import './work.css';
import { useState } from 'react';
import styled from 'styled-components';


const Work = () => {
	const Thales = {
		title: 'Software Engineer Intern',
		company: 'Thales',
		location: 'Singapore',
		range: 'May 2023 - August 2023',
		url: 'https://www.linkedin.com/company/thales/mycompany/verification/',
		description: `-	Implement new features and bug fixes in Java with stringent unit-testing to continuously improve user experience for internal tools used in Thales DIS.
		-	Help with code review of other full-time software engineers’ code to maintain code quality and ensure correct implementation of features.
		-	Involved in DevOps software development cycles in a team of software engineers including sprint planning and backlog refinement to scope tasks for future sprints.
		-	Refactor thousands of lines of legacy code to improve code readability and ensure adherence to good software engineering principles.`,
	};

	const Nus = {
		title: 'Teaching Assistant',
		company: 'NUS School of Computing',
		location: 'Singapore',
		range: 'January 2023 - April 2023',
		url: 'https://nus.edu.sg/careers/teaching.html',
		description: `- Taught two tutorial classes of a total of 23 students for CS2100 Computer Organisation, a course on the concepts of MIPS Architecture.
		- Guided students through tutorials and assignments with a gamified learning system to make learning enjoyable
		- Graded their assignments and projects while providing constructive feedback afterwards.`,
	};

	const Sam = {
		title: 'Junior Full Stack Developer',
		company: 'ServerSam Pte Ltd',
		location: 'Singapore',
		range: 'May 2022 - July 2022',
		url: 'https://www.linkedin.com/company/serversam-pte-ltd/',
		description: `- Developed websites for e-commerce businesses on the ASP.NET framework with SQL Server Management studio databases in Javascript, C#, HTML, CSS 
		- Worked with other interns to implement features and resolve bug tickets.`,
	};

	
	const [activeTabId, setActiveTabId] = useState(3);
	return (
		<section className="work">
            <h3>Where I've Worked</h3>

			
        </section>
	);
};

export default Work;