import React from 'react'

const Boxe1 = ({backgrou,col,tex,classn}) => {
  return (
    <div  style={{background:backgrou,color:col}}  className={classn}>
    <p>{tex}</p>
 </div>
  )
}

export default Boxe1