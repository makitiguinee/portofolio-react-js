import React from 'react'
import './Experience.css'
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
const Experience = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    console.log(darkMode);
  return (
    <div className="experience" id='Experiences'>
        <div className="archievement">
            <div className="circle" style={{ color: darkMode ? "black" : "" }}>2+</div>
            <span>Ans</span>
            <span>Experiences</span>
        </div>

        <div className="archievement">
            <div className="circle" style={{ color: darkMode ? "black" : "" }} >5+</div>
            <span>Projet</span>
            <span>Complets</span>
        </div>

        <div className="archievement">
            <div className="circle" style={{ color: darkMode ? "black" : "" }}>3+</div>
            <span>Entreprises</span>
            <span>Travaillé</span>
        </div>
    </div>
  )
}

export default Experience
