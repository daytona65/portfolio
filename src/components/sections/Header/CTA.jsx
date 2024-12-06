import Resume from '../../../assets/docs/resume.pdf';
import './header.css';

// Call to Action
const CTA = () => {
    return (
        <div className='header__cta'>
            <a href={Resume} download
                className='btn'>
                Download Resume
            </a>
            <a href="#contact" 
                className='btn'>
                Let's get in touch!
            </a>
        </div>
    )
}

export default CTA;