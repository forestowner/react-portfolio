import './index.scss'
import { Link, NavLink } from 'react-router-dom'

import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram, faSketch } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faNetworkWired, faKeyboard, faCube } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
<div className ='nav-bar'>
    <Link className = "logo" to = "/">
       <img src ={LogoS} alt="logo" />
       <img сlassName = "sub-logo" src ={LogoSubtitle} alt="slobodan"/>
    </Link>
    
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#f0ece1" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#d63333" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#d63333" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
            <FontAwesomeIcon icon={faKeyboard} color="#d63333" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/hanna-nyzhnia'>
                <FontAwesomeIcon icon={faLinkedin} color="#d63333"/>
            </a>
        </li>
        <li>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://github.com/forestowner'>
                <FontAwesomeIcon icon={faGithub} color="#d63333"/>
            </a>
        </li>
        <li>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://www.instagram.com/proudforestowner/'>
                <FontAwesomeIcon icon={faInstagram} color="#d63333"/>
            </a>
        </li>
        <li>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://sketchfab.com/forestowner'>
                <FontAwesomeIcon icon={faCube} color="#d63333"/>
            </a>
        </li>
    </ul>
</div>
)
    
export default Sidebar