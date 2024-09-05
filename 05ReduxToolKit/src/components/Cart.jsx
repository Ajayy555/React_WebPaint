import React, { useState } from 'react'
import './../App.css'
import {useSelector} from 'react-redux'

function Cart() {
const items=useSelector(state=>state.cart)

const totalAmt=items.reduce((prev,next)=> prev+next.price,0).toFixed(2)

  return (
    <div className='cart'>
        <h3>Cart items ( {items.length} )</h3>
        <h4>Rs {totalAmt }</h4>
    </div>
  )
}

export default Cart
