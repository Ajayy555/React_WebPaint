import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'  
import { useSelector,useDispatch } from 'react-redux'
import {fetchProduct} from './../redux/slices/productSlice'
import { addItem } from './../redux/slices/cartSlice'



function DetailedProduct() {
  const {id}=useParams();
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(fetchProduct(id));
  },[])

  const product=useSelector(state=>state?.singleProduct.data);
  // console.log(product);
  
if(!product){
  return <><h1>Loading</h1></>
}

  return (<>
        <h1>Detailed product</h1>
        <div className="card" key={1} >


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
            <button onClick={(e)=>dispatch(addItem({title:product.title,price:product.price}))} >Add to Cart</button>
          </p>

          <div>
            <hr />
            <h5>Ratings : {product.rating}</h5>
            <p><b>Return Policy - </b>{product.returnPolicy}</p>
          </div>
    </div>
    </>
  )}


export default DetailedProduct
