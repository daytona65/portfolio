import React from 'react';
import profile from '../../../assets/images/bali2.jpg';
import {FaBriefcase, FaCode, FaCodeBranch} from 'react-icons/fa';
import './biography.css';

import { useSpring, animated } from 'react-spring';

function Counter({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 4000,
    config: { mass: 1, tension: 20, friction: 10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
const Biography = () => {
  return (
    <div className='container__biography'>
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
        <p>I enjoy creating and solving my own problems. Currently a final year computer science undergraduate at the National University of Singapore.
            Check out my latest {' '}
            <a href="https://www.straitstimes.com/singapore/journaling-app-platform-to-connect-kaypohs-to-lonely-seniors-among-build-for-good-launches" target="_blank">side quest!</a>
            <br/>When I'm not working on advancing my technical knowledge, I enjoy channeling my creativity and problem-solving skills into videography and video editing.
            I also enjoy training like a professional for endurance sports to perform averagely in races.
        </p>
      </div>
    </div>
    
  )
}

export default Biography;