import React from 'react'
import './Service.css'
import HeadEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humbmle from '../../img/humble.png';
import Card from '../Card/Card';
import CondeCv from '../bailo_conde_cv.pdf'
import { motion } from "framer-motion";
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
const Service = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  const transition={duration:2,type:'spring'}
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesone">
            <span style={{ color: darkMode ? "white" : "" }}>Mes Impressionnants </span>
            <span style={{ color: darkMode ? "white" : "" }}>Services</span><br />
            <span>
                En tant que développeur web et mobile 
                expérimenté,
                <br />
                je suis passionné par la création
                de solutions innovantes qui repoussent les limites
                <br />
                de la technologie, tout en garantissant une performance
                optimale, 
                <br />
                une sécurité renforcée et une accessibilité accrue.
            </span>
            <a href={CondeCv} download>
             <button className="button s-button">Telécharger CV</button>
            </a>
            <div className="blur s-blurl" style={{background:"#AGF1FF94"}}></div>
       
        </div>
        {/* right side */}
        <div className="cards">
            {/* first card */}
            <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}>
            <Card
              emoji={Humbmle}
              heading={'UX/UI'}
              detail={"Design is not just what it looks like and feels like. Design is how it works."}
           />
            </motion.div>
            {/* second card */}
            <motion.div
             initial={{ left: "-11rem", top: "12rem" }}
             whileInView={{ left: "-4rem" }}
             transition={transition}>
            <Card
              emoji={Glasses}
              heading={'Developpeur'}
              detail={"React,Laravel,Html,CSS,Sprint,..."}
           />
            </motion.div>
            {/* third card */}
            <motion.div 
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}>
            <Card
              emoji={HeadEmoji}
              heading={'Designer'}
              detail={"Canva,Figma,Photoshop,..."}
           />
            </motion.div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Service
