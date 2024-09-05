import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'
import cartReducer from './slices/cartSlice'
import Products from '../components/Products'
import productSlice from './slices/productSlice'
export const store= configureStore({
    reducer:{
        AllProducts:todoReducer,
        cart:cartReducer,
        singleProduct:productSlice
    }
})