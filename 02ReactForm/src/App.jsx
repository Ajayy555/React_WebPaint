import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import './App.css'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Register from './components/Register'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)


    const router=createBrowserRouter([
      {
        path:"/",
        element:<><Navbar/><Home/></>
      },
      {
        path:"login",
        element:<><Navbar/><LoginForm/></>
      },
      {
        path:"register",
        element:<><Navbar/><Register/></>
      }
      
    ])

  return (
    <>
  
    <RouterProvider router={router}/>


    {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register/>} />

    </Routes>
    </BrowserRouter> */}
    
      {/* <LoginForm/> */}
      {/* <SignupForm/> */} 
      {/* <Register/> */}
    </>
  )
}

export default App
