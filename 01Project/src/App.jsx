import { useState } from 'react'

import './App.css'

function App() {
  let Student={
    name:"Vishal",
    age:24,
    rollno:4024,
    marks:[45,54,67,82,77]
  }

  return (
    <>
    <h1>Hello World !</h1>
      
      
      

      

      <h2>College Record</h2>
      <h3>Student Detials</h3>
        <div>
         <h3>
            Name : {Student.name }<br/>
            Age : {Student.age }<br/>
            Roolno : {Student.rollno }<br/>
       
          </h3> 
            
        </div>


      
   
    </>
  )
}

export default App
