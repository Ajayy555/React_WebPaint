import React from 'react'

import {useForm} from "react-hook-form";

function LoginForm() {
const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
}=useForm();

const onSubmit=(data)=>console.log(data);


  return (
    <div>
      <div className='container'>
        <h2>Log In</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">UserName</label>
            <input {...register("username",{required:true,minLength:{value:3, message:"Min Length is 3"},maxLength:{value:15, message:"Min Length is 15"}})} 
            type='text' name='username' id="username" placeholder='Enter User Name'/>
            {errors.username && errors.username.message}
            <br/>
       

              <label htmlFor="password">Password</label>
            <input {...register("password")}type='password' name='password' id="password" placeholder='Enter Password'/><br/>
            <input type="submit" value="submit" />
        
        
        </form>
      </div>
    </div>
  )
}

export default LoginForm
