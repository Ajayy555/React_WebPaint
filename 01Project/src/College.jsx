 function College(){
   
    const stu={
    rollno:4012,
    name:"vishal",
    age:24
    }

  return (
    <>
    <Student student={stu}/>
    </>
  )
}

function Student(props)
{
    return (
        <>
           <h2>Student Record</h2>
           <h3> Name : {props.student.name} </h3>
           <h3> RollNo : {props.student.name} </h3>
           <h3> Age : {props.student.name} </h3>
        </>
    )
}
export default College;