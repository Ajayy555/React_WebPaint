import {createSlice,createAsyncThunk}  from '@reduxjs/toolkit';  
import axios from  'axios'

export const fetchProduct=createAsyncThunk('fetchProduct',async(id)=>{
    try{
    const res=await axios.get(`https://dummyjson.com/products/${id}`);
    console.log("in thunk singleproduct",res);
    
    return res.data;
    }catch(err){
        console.log(err);
        
    }
})



const singleProductSlice=createSlice({
        name:"Product",
        initialState:{
            isLoading:false,
            data:null,
            isError:false,
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchProduct.pending,(state,action)=>{
                state.isLoading=true;
            })
            builder.addCase(fetchProduct.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.data=action.payload;
            })
            builder.addCase(fetchProduct.rejected,(state,action)=>{
                console.log("Error : ",action.payload);
                state.isError=true;  
            })
        }
})

export default singleProductSlice.reducer;