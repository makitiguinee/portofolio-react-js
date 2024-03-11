import React from 'react'
import Togg from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
import './Toggle.css'
const Toggle = () => {

  const theme=useContext(ThemeContext)
  const darkMode=theme.state.darkMode
  const handleClick=()=>{
     theme.dispatch({type:'toggle'})
  }
  return (
      <div className="toggle" onClick={handleClick}>
        <Moon/>
        <Togg/>
        <div className="t-button"  style={darkMode ? {left:"3px"} :{right:"2px"}} >
           
        </div>
      </div>
  )
}

export default Toggle
