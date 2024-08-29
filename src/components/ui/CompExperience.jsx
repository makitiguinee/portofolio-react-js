import React from 'react'
import { ThemeContext } from '../../../Context'
import { useContext } from "react";

const CompExperience = ({ans,experience,nombreAnnee}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="archievement">
        <div className="circle" style={{ color: darkMode && "black" }}>{nombreAnnee}+</div>
        <span>{ans}</span>
        <span>{experience}</span>
    </div>
  )
}

export default CompExperience
