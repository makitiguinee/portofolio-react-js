
import React from 'react';
import Guthub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import instagram from '../../img/instagram.png';
import vector1 from '../../img/Vector1.png';
import vector2 from '../../img/Vector2.png';
import monsieur from '../../img/monsieur1.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import { motion } from "framer-motion";
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
import { Link } from 'react-router-dom';
const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const transition={duration:2,type:'spring'}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }} className='intro-titre'> Salut je suis</span>
                <span className='intro-titre'>Bailo Conde</span>
                <span>Je suis un développeur web et mobile débutant doté d'une grande 
                    expérience dans la conception et la création de solutions numériques. 
                    Mon engagement envers la qualité du travail se reflète dans ma capacité à 
                    produire des produits exceptionnels qui répondent aux besoins de mes 
                    clients et utilisateurs
                </span>
            </div>
            <button className="button i-button">Engager moi</button>
            <div className="i-icon">
               <Link to='https://github.com/makitiguinee/makitiguinee.github.io'><img src={Guthub} alt="" className='ico' /></Link>
               <Link to='https://www.facebook.com/mamadoubailo.conde.393'><img src={LinkedIn} alt="" className='ico' /></Link>
               <Link to='https://www.instagram.com/bailo_conde?igsh=eHR0YzNqdzBjNW1ohttps://www.instagram.com/bailo_conde?igsh=eHR0YzNqdzBjNW1o'><img src={instagram} alt="" className='ico' /></Link>    
             </div>
        </div>
        <div className="i-right">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
          <img src={monsieur} alt="" id='monsieur'/>
          <motion.img 
          initial={{left:'-36%'}}
          whileInView={{left:'-24%'}}
          transition={transition}
          src={glassesimoji} id='vecter1' alt="" />

          <motion.div 
           initial={{top:'-4%',left:'74%'}}
           whileInView={{left:'68%'}}
           transition={transition}
           style={{color: darkMode ? "white" : "",top:'-4%',left:'68%'}}
           className="floating-div"
           >
           <FloatingDiv image={crown} txt1="Developpeur" txt2="Web & Mobile" />
          </motion.div>

          <motion.div
            initial={{top:'9rem',left:'18rem'}}
            whileInView={{left:'0rem'}}
            transition={transition} 
            style={{top:'18rem',left:'0rem'}}
            className="floating-div"
            >
           <FloatingDiv image={thumbup} txt1="Best" txt2="Designer"/>
          </motion.div>

          {/* bleur div */}
          <div className="blur" style={{background:"rgb (238 210 255 )"}}></div>
          <div className="blur" 
            style={{
                background:"#C1F5FF",
                top:"17rem",
                width:"21rem",
                height:"11rem"
                }}>

          </div>

          
        </div>
    </div>
  )
}

export default Intro
