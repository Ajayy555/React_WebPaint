import {createSlice,createAsyncThunk}  from '@reduxjs/toolkit';  
import axios from  'axios'

export const fetchTodo=createAsyncThunk('fetchTodo',async()=>{
    const res=await axios.get('https://dummyjson.com/products');
    console.log("in thunk ",res);
    
    return res.data;
})



const todoSlice=createSlice({
        name:"Products",
        initialState:{
            isLoading:false,
            data:null,
            isError:false,
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchTodo.pending,(state,action)=>{
                state.isLoading=true;
            })
            builder.addCase(fetchTodo.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.data=action.payload;
            })
            builder.addCase(fetchTodo.rejected,(state,action)=>{
                console.log("Error : ",action.payload);
                state.isError=true;  
            })
        }
})

export default todoSlice.reducer;