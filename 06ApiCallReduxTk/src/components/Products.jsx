import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { addItem } from './../redux/slices/cartSlice'
import DetailedProduct from './DetailedProduct';
import { useSelector,useDispatch } from 'react-redux'
import {fetchTodo} from './../redux/slices/todoSlice'

function Products() {
  const [search,setSearch]=useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchTodo());
  },[])

    const response=useSelector(state=>state?.AllProducts.data);
    // console.log("ssss",response);
    
    if(!response){
      return <><h1>Loading</h1></>
    }

    // const { id, brand, title, category, price, images } = props;

    


  return (
//https://dummyjson.com/products
<>
<input type='Text' name='serachProduct' id='searchProduct' placeholder='Search product here ...'
onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())
}
/><i className="fa fa-fw fa-search"></i> 
<div className='grid'>
{
  response?.products?.filter((product)=>{
    return search.toLocaleLowerCase()=== '' ? product : product.title.toLocaleLowerCase().includes(search)
  }).map((product)=>(
    // const { id, brand, title, category, price, images }=product;
<Link to={`/productDetail/${product.id}`}> <div className="card" key={product.id} >


          <img
            className="IMG"
            src={product.images}
            height="200px"
            width="200px"
            alt=""
          />
          <h2>
            {product.brand} ({product.category})
          </h2>
          <p className="price">{product.title}</p>
          <p>{product.price}</p>
          <p>
            {/* <button onClick={(e)=>dispatch(addItem({title,price}))} >Add to Cart</button> */}
          </p>
          <div></div>
    

  </div>

 </Link>

))}
</div>

</>
  )
}

export default Products
