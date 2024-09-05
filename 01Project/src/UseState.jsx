import React, { useState } from 'react'
import { useEffect } from 'react'

function UseState() {
    const [color,SetColor]=useState([])

    useEffect(()=>{
      alert('Color Changed '+color);
      console.log('color changed',color);
      
    },[color])
  return (
    <div>
      <h2>Color : {color}</h2>
      <button onClick={()=>SetColor("Green")}>Green</button>
      <button onClick={()=>SetColor("Pink")}>Pink</button>
      <button onClick={()=>SetColor("Blue")}>Blue</button>
    </div>  
  )
}

// function changecolor(color)
// {
//     SetColor(color)
// }


export default UseState
