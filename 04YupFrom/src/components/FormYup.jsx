import React, { useState } from 'react'

function FormYup() {

    const [formData,setFormData] =useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        password:"",
        confirmPassword:"",
        age:"",
        gender:"",
        interests:[],
        birthDate:""
    });

    const handleSubmit =(e) =>{
      e.preventDefault();

    }

    const handleChange=(e) =>{
         const {name,value}=e.target;
      setFormData({
        ...formData,
        [name]:value,
      })
    }

  return (
    <div>
      <h1>Custome Form Validation</h1>
        <form action="" className='form' onSubmit={handleSubmit}>
            <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" name="firstName" id="firstname" 
            placeholder='Enter user name'
            value={formData.firstName}
            onChange={handleChange}
            />
            </div>

            <div>
          <label htmlFor="lastname">Last name</label>
            <input type="text" name="lastName" id="lastname" 
            placeholder='Enter last name'
            value={formData.lastName}
            onChange={handleChange}
            />
            </div>

            <div>
          <label htmlFor="lastname">Email</label>
            <input type="email" name="email" id="email" 
            placeholder='Enter email'
            value={formData.email}
            onChange={handleChange}
            />
            </div>

            <div>
          <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" 
            placeholder='Enter phone number'
            onChange={handleChange}
            />
            </div>

            <div>
          <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" 
            placeholder='Enter Password' value={formData.password}
            onChange={handleChange}
            />
            </div>

            <div>
          <label htmlFor="confPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" 
            placeholder='confirm Password' value={formData.confirmPassword}
            onChange={handleChange}
            />
            </div>

            <div>
          <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" 
            placeholder='Enter Age' value={formData.age}
            onChange={handleChange}
            />
            </div>


            <div>
          <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
            </div>

            <div>
              <label htmlFor="interests">Interests : </label>
              <input type="checkbox" name="coding" 
                value={formData.interests.includes("coding")}
              /><label>Coding</label>
    
              <input type="checkbox" name="reading" 
                value={formData.interests.includes("reading")}
                onChange={handleChange}
             /><label>Reading</label>
            </div>

            <div>
            <label htmlFor="DOB">DOB</label>
            <input type="date" name="birthDate" id="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
            </div>

            <div>
              <input type='submit'/>
            </div>


        </form>
       

    </div>
  )
}

export default FormYup
