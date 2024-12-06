import {BsLinkedin, BsGithub, BsMailbox, BsYoutube} from 'react-icons/bs';
import './socials.css';


const Socials = () => {
  return (
    <div className='socials'>
        <a href="https://linkedin.com/in/nicholasahalim" className="socials__icon" target="_blank"><BsLinkedin size={25}/></a>
        <a href="https://github.com/daytona65" className="socials__icon" target="_blank"><BsGithub size={25}/></a>
        <a href="mailto:nicholas.halim@u.nus.edu" className="socials__icon" target="_blank"><BsMailbox size={25}/></a>
        <a href="https://www.youtube.com/channel/UCQss9KxHldbCGTz2Nb2kqrw" className="socials__icon" target="_blank"><BsYoutube size={25}/></a>
    </div>
  )
}

export default Socials;