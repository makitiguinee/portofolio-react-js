// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import Justify from '@iconscout/react-unicons/icons/uil-align-justify';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Navbar = () => {
  return (
    <div>
      <div className="n-bailo">
        <div className="n-left">
            <div className="name">Bailo Conde</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                   <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                      <li>Accueil</li>
                   </Link>

                   <Link spy={true} to='Services' smooth={true}>
                     <li>Services</li>
                   </Link>

                   <Link spy={true} to='Experiences' smooth={true}>
                     <li>Experiences</li>
                   </Link>

                   <Link spy={true} to='protofolio' smooth={true}>
                     <li>Projets</li>
                   </Link>

                   <Link c spy={true} to='Contact' smooth={true}>
                     <li>Contact</li>
                   </Link> 
                </ul>
            </div>
           
            <button className="button n-button">Mes Contacts</button>
            <div className='menu-icon' id='toggle_nav'>
              <Justify />
             </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
