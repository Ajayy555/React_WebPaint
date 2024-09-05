import axios from 'axios';
import React, { useState } from 'react'

function SearchBar(products,{setProduct}) {
    const [input,setInput]=useState("")
    const data=products.products;

    // console.log("dta in nav-serach ",data[1].title);
    
  const handleChange=()=>{
        console.log("inside handle",input);
        
        const result= data.filter((data)=>{
            return (
                data.title.toLowerCasE().inlucdes('eye')
            )

        })
       console.log(result);
       
       
       setProduct(result) 
    }

  return (
    <>
        <input type="text"  placeholder='Type to serach ..' name="search"
            value={input}
            onChange={(e)=>{
                setInput(e.target.value)
                   handleChange
                console.log("setval",input);
                
            }}
        />
        </>
  )
}

export default SearchBar
