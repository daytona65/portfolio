import React from 'react';
import profile from '../../../assets/images/bali2.jpg';
import {FaBriefcase, FaCode, FaCodeBranch} from 'react-icons/fa';
import './biography.css';

import { useSpring, animated } from 'react-spring';

function Counter({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
const Biography = () => {
  return (
    <div className='container container__biography'>

        <div className='profile'>
          <div className='profile__internships'>
            <div className='counter'>
              <Counter className='counter' n ={4}/>
            </div>
            <small>Experiences</small>
          </div>
          <div className='profile__border'>
            <img className='profile__image' src={profile} alt="profile pic"/>
          </div>
          <div className='profile__projects'>
            <div className='counter'>
              <Counter n ={5}/>
              <small> + </small>
            </div>
            <small>Projects</small>
          </div>

          <div className='profile__mobile'>

            <div>
              <div className='counter__mobile'>
                <Counter n ={4}/>
              </div>
              <small>Experiences</small>
            </div>
            
            <div>
              <div className='counter__mobile'>
                <Counter n ={5}/>
                <small> + </small>
              </div>
              <small>Projects</small>
            </div>

          </div>
        </div>
        

        <div className='biography__header'>
            <h3>About Me</h3>
        </div>

        <div className='biography__content'>
          <p>I am an aspiring software engineer who enjoys working on projects that involve anything from responsive front-ends 
              to developing efficient back-ends. Currently, I am a penultimate computer science undergraduate at the National University of Singapore.
              I have experience working with a {' '}
              <a href="https://www.linkedin.com/company/serversam-pte-ltd/" target="_blank">startup</a>, 
              school-based projects, and a {' '}
              <a href="https://www.linkedin.com/company/thales/mycompany/verification/" target="_blank">large tech company</a>.
              <br/><br/>In addition to software development, I enjoy channeling my creativity and problem-solving skills into videography and video editing.
                Seeing my solutions come to life and tackling complex challenges is what truly captivates me.
          </p>
        </div>

        
    </div>
    
  )
}

export default Biography;