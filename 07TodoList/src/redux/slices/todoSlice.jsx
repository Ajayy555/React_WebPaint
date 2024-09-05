import {createSlice} from "@reduxjs/toolkit"

const todoSlice=createSlice({
    name:"Todo",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
                state.push(action.payload);
        },
        removeTodo:(state,action)=>{
            
            console.log("in slice",action);
          
                        
            state.splice(action.payload-1   ,1)
            
            
        },
    },
})

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
