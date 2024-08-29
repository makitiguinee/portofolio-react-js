import React from 'react'
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
export const Titre = ({titre,name}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <span style={{ color: darkMode ? "white" : "" }} className={name}>
      {titre}
    </span>
  )
}

