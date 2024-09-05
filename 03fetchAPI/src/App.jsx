import { useState,useEffect } from "react";
import axios from 'axios';
import './App.css';
import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";

function App() {

  // const [products, setProduct] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((res) => setProduct(res.data.products))      
  //     .catch((err) => console.log("error while fetch", err));
  // }, []);

    // console.log("at app",products);
    

  return (
    
    <>
      {/* {products.length} */}
    <Navbar/>
    <MainBody/> 

    </>
  );
}

export default App;
