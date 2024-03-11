import React from 'react'
import './Work.css'
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Linkedin from '../../img/linkedin.png';
import Feverr from '../../img/fiverr.png';
import Upwork from '../../img/Upwork.png';
import Spotify from '../../img/Shopify.png';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Twetter from '../../img/twetter3.png';
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
import { motion } from "framer-motion";

const Work = () => {
    // context

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="work">
        <div className="awesone">
            <span style={{ color: darkMode ? "white" : "" }}>Mes Traveaux </span>
            <span style={{ color: darkMode ? "white" : "" }}>marques et clients</span><br />
            <span>                 
            Dans ma carrière de développeur, chaque projet représente bien plus qu'une simple ligne de code. <br />
            Chaque ligne écrite est un pas vers la réalisation d'une vision, une opportunité  <br />
            de transformer des idées en réalité tangible. Que ce soit en collaborant <br />
            avec des clients passionnés ou en donnant vie à la vision d'une marque, <br /> 
            chaque travail que j'entreprends est une invitation à l'innovation,  <br />
            à la créativité et à l'excellence. Chaque défi technique est une chance <br /> 
            de repousser les limites de mes compétences et de créer des solutions  <br />
            qui inspirent et impactent positivement la vie des utilisateurs. <br /> 
            À travers chaque projet, je m'efforce de laisser une empreinte  <br />
            significative dans le paysage numérique, en construisant <br /> 
            des expériences qui résolvent les problèmes, <br />
            captivent les esprits et transforment le monde en un endroit meilleur
            </span>
             <button className="button s-button">Engager moi</button>
            <div className="blur s-blurl" style={{background:"#AGF1FF94"}}></div>
       
        </div>
        
        {/* right side */}
        <div className="w-right">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
             className="w-mainCircle">

                <div className="w-secCircle">
                    <img src={Facebook} alt="facebook" />
                </div>

                <div className="w-secCircle">
                    <img src={Linkedin} alt="linkedin" />
                </div>
                
                <div className="w-secCircle">
                    <img src={Spotify} alt="spotify" />
                </div>

                <div className="w-secCircle">
                    <img src={Instagram} alt="instagram" />
                </div>

                <div className="w-secCircle">
                    <img src={Github} alt="github" />
                </div>
                {/* backgroud  circles*/}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </motion.div>
        </div>
   </div>
  )
}

export default Work
