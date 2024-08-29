import React from 'react'
import './Experience.css'
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
import CompExperience from '../ui/CompExperience';
const Experience = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experiences'>
        <CompExperience ans='ans' experience='Experences' nombreAnnee='2'/>
        <CompExperience ans='Projet' experience='Complets' nombreAnnee='5'/>
        <CompExperience ans='Entreprises' experience='Travaillé' nombreAnnee='3'/>
    </div>
  )
}

export default Experience
