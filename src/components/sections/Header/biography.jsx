import React from 'react';
import profile from '../../../assets/images/bali.jpg';
import './header.css';

const Biography = () => {
  return (
    <div className='header__biography'>
        <div className='biography__content'>
		    <h3>About Me</h3>
            <p>I am an aspiring software engineer who enjoys working on projects that involve responsive front-end technologies, 
                as well as developing efficient back-ends. Currently, I am a penultimate computer science undergraduate at the National University of Singapore.
                I have experience working with a {' '}
                <a href="https://www.linkedin.com/company/serversam-pte-ltd/" target="_blank">startup</a>, 
                school-based projects, and a {' '}
                <a href="https://www.linkedin.com/company/thales/mycompany/verification/" target="_blank">large tech company</a>.
                <br/><br/>In addition to software development, I enjoy channeling my creativity and problem-solving skills into videography and video editing.
                 Seeing my solutions come to life and tackling complex challenges is what truly captivates me.
            </p>
        </div>
        <div className="profile">
            <img className="profile__image" src={profile} alt="profile pic"/>
        </div>
    </div>
    
  )
}

export default Biography;