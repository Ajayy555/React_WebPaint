import React from 'react'
import {removeTodo} from "./../redux/slices/todoSlice"
import {useDispatch} from 'react-redux'
import {useSelector} from "react-redux"
function TodoItems(props) {
    // console.log("inside todo item",props);
        const handleComplete=props.handleComplete();
        const dispatch=useDispatch();
    // const handleComplete=(taskNo)=>{
    //     alert(taskNo)
      
        
    //     dispatch(removeTodo(taskNo))
    // }

    const todo=props.todo;
    const dueDate=props.dueDate;
  return (
    <>
            <center>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
        <div className="container  item-container"> 
          <div className="row td-row">
            <div className="col-4">{todo}</div>
            <div className="col-4">{dueDate} </div>
            <div className="col-2"><button className="btn btn-primary td-btn" onClick={handleComplete(props.taskNo)}>Completed </button></div>
            <div className="col-2"><button className="btn btn-danger td-btn" >Delete  </button></div>

          </div>
        </div>
        </form>
        </center>
    </>
  )
}

export default TodoItems
