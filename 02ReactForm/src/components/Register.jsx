import React from 'react'
import { useForm } from 'react-hook-form'


function Register() {
const 
{
    register,
    handleSubmit,
    watch,
    formState:{errors}
}=useForm();

const onsubmit=(data) => console.log(data);


return (
    <>
        <h2>Register Form</h2>

        <form action="" onSubmit={handleSubmit(onsubmit)}>
            <input type="text" 
            placeholder='Enter Username'
            name='username'
            {...register("username",{
                required:true,
                minLength:{value:4,
                    message:"invalid username (min char 4)"
                }
            })}
            /><br/>
            <div>
                {errors.username && errors.username.message}
            </div>

            <input type="email"
            placeholder="Enter Email"
            name='email'
            {...register("email",{
              required:true,
                pattern:{
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"invalid email"
                }
              
            })}/><br/>
            <div>{errors.email && errors.email.message}</div>
            

            <input type="number"
            placeholder="Enter Mobile No."
            name='mobile'
            {...register("mobile",{
                required:true,
                // pattern:{
                //     value:/^[0-9]$/i,
                //     message:"mobile number doesn't contain char"
                // },
                minLength:{value:10,
                     message:"mobile number must be 10 digit"
                }
               
            })}/>
            <div>{errors.mobile && errors.mobile.message}</div>
            <br/>
. 
          <input
            label="pls"
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("exampleCheck1", {
              required: {value:true,
              message: "Please Check T & C."}
            })}
          /><span>{errors.exampleCheck1 && errors.exampleCheck1.message}</span>
         <br/>



            <input type="submit" value="Register" />
        </form>

    </>
  )
}

export default Register
