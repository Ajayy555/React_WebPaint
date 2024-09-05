import React from 'react'
import './../App.css'
import SearchBar from './SearchBar'
function Navbar(products,{setProduct}) {
  const data=products.products;
  return (
    <>

<div className="navbar">
  <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
  {/* <a href="#"><i className="fa fa-fw fa-search"></i> </a> */}
  <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
  <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
</div>  

    </>
  )
}

export default Navbar
