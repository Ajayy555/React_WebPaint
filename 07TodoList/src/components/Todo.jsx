import React from "react";
import TodoItems from "./TodoItems";
import {useSelector,useDispatch} from 'react-redux'
import { addTodo } from "../redux/slices/todoSlice";
import { useState } from "react";


function Todo() {
    const dispatch=useDispatch();
    const todoList =useSelector(state=>state.Todo)
    console.log(todoList);
    const [taskNo,setTaskNo]=useState(1);


const handleSubmit = ()=>{
   
        const todo=document.getElementById('todoText').value;
        const dueDate=document.getElementById('dued').value
        // console.log(todo,dueDate);
        
        dispatch(addTodo({todo,dueDate,taskNo}))
        setTaskNo(taskNo+1)
        
   
}

  

const handleChange=(e)=>{
  setTimeout(()=>{
    console.log(e.target.value);
  },2000)

  // console.log(e.target.value);
}

const handleComplete=(taskNo)=>{
  alert(taskNo)

  
  dispatch(removeTodo(taskNo))
}


return (
    <>
            <center key={todoList.taskNo}>
        <h1>Todo List</h1>
        <form action="" id="todolist" onSubmit={(e)=>e.preventDefault()}>
        <div className="container item-container">
          <div className="row" >
            <div className="col-4"> <input type="text " id="todoText" placeholder="Enter Todo here" onChange={(e)=>handleChange(e)}/></div>
            <div className="col-4"><input type="date" id="dued"  /></div>
            <div className="col-2"><button className="btn btn-success td-btn"  onClick={handleSubmit}>Add  </button></div>
          
          </div>
        </div>
        </form>
        </center>
        {todoList?.map((data)=><div key={todoList.taskNo}>
        <TodoItems {...data} handleComplete={handleComplete}/></div>
        )}
        
        
        </>    
  );
}

export default Todo;
