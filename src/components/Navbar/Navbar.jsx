// eslint-disable-next-line no-unused-vars
import React, { useEffect,useState } from 'react'
import './Navbar.css';
import { Titre } from '../ui/Titre';
import Toggle from "../Toggle/Toggle";
import { navBar } from './NavbarData';
import Justify from '@iconscout/react-unicons/icons/uil-align-justify';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

  
const Navbar = () => {
  // pour mettre une couleur de texte a l'onglet actif
  const [activeTab, setActiveTab] = useState('Accueil');

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  var i=1;
  return (
    
      <div className="n-bailo">
        <div className="n-left">
          <Titre name='name' titre='Bailo Conde'/> 
          <Toggle/>
        </div>
        <div className="n-right">
            
                {navBar.map(navbar=>(
                    <div className="n-list" key={navbar.libelle}>
                    <ul style={{listStyleType:'none'}}>
                   <Link spy={true} to={navbar.link} smooth={true} activeClass='activeClass'>
                      <li className={activeTab === navbar.libelle ? "tab active" : "tab"}  onClick={() => handleClick(navbar.libelle)}>{navbar.libelle} </li>
                   </Link>
                </ul>
                    </div>
                  
                ))}
            
           
            <button className="button n-button">Mes Contacts</button>
            <div className='menu-icon' id='toggle_nav'>
              <Justify />
             </div>
        </div>
      </div>
  )
}

export default Navbar
