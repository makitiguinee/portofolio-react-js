import React from 'react'
import '../Service/Service.css'
import Boxe1 from './Boxe1'
const Boxe = () => {
  return (
    <div className='boxing'>
      <Boxe1 backgrou='red'  tex='rouge' classn='boxe1'/>
      <Boxe1 backgrou='yellow' tex='jaune' classn='boxe2'/>
      <Boxe1 backgrou='green'  tex='vert' classn='boxe3'/>
    
    </div>
    
  )
}

export default Boxe
