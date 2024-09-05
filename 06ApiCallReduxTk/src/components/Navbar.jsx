import React from 'react'
import './../App.css'
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Navbar() {

  const cartItems=useSelector(state=>state.cart)
  console.log(cartItems);
  const billAmt=cartItems.reduce((prev,next)=>prev+next.price,0).toFixed(2)
  // const data=products.products;
  return (
    

<div className="navbar">
  <Link to="/" className="active" ><i className="fa fa-fw fa-home"></i> Home</Link>
  <Link to="/" ><i className="fa fa-fw fa-envelope"></i> Contact</Link>
  <Link to="/" ><i className="fa fa-fw fa-user"></i> Login</Link>
  <Link to="/" ><i className="fa fa-shopping-cart" aria-hidden="true" style={{}}></i>({cartItems.length}) </Link>
  <Link to="/" ><i className="fa fa-usd" aria-hidden="true"></i>({billAmt})</Link>
</div>  

  
  )
}

export default Navbar
