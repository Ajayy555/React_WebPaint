import React from "react";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState:{errors}
}=useForm();
  const onsubmit = (data) => console.log(data);
  

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-3">

        <input
            type="text"
            placeholder="Username"
            className="form-control"
            id="username"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 4,
                message: "Username must be 4 characters or more",
              },
            })}
          />
          <div>{errors.username && errors.username.message}</div>
        </div>

        <div className="mb-3">
        
          <input
            type="email" placeholder="email"
            className="form-control"
            id="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:{value:"@",
              message: "email in wrong format"}
            })}
          />
          
          <div>{errors.email && errors.email.message}</div>
        </div>

        <div className="mb-3">
        
          <input
            type="text" placeholder="Phone Number"
            className="form-control"
            id="phone"
            name="phone"
            {...register("phone", {
              required: true,
              pattern: /^[0-9]+$/i ,
              minLength:{value: 10,
              message: "Invalid Phone Number must be 10 digits"}
            })}
          />
          
            <div>{errors.phone && errors.phone.message}</div>
        </div>

        <div className="mb-3">
          
          <input
            type="password" placeholder="Password"
            className="form-control"
            id="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: {value :8,
              message: "Password must be 8 Characters"}
            })}
          />
            <div>{errors.password && errors.password.message}</div>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("exampleCheck1", {
              required: {value:true,
              message: "Please Read T & C "}
            })}
          />
            <div>{errors.exampleCheck1 && errors.exampleCheck1.message}</div>
          <label className="form-check-label" htmlFor="exampleCheck1">
            Terms & Condition
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
