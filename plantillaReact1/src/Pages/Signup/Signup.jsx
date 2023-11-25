import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { FormControl, FormLabel, Input, TextField } from '@mui/material'
import signup from '../../Services/sign.service'
import './Signup.css'

export default function Signup () {

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [date_of_birth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [contact_number, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  async function handleOnSignup(){
    try{
      const response = await signup({ first_name, last_name,date_of_birth,gender,contact_number,email,password,role })
      console.log(response)
      localStorage.setItem("email", response.email)
      localStorage.setItem("token", response.token)
      localStorage.setItem("role", response.role)
    }
    catch(error){
      console.log(error)
    }
  }

console.log(email)
  return (
    <div className='form'>
      <h1>Create an Account</h1>
      <TextField id="standard-basic" label="First Name" variant="standard" onChange={(event) => setFirstName(event.target.value)}/>
      <TextField id="standard-basic" label="Last Name" variant="standard" onChange={(event) => setLastName(event.target.value)}/>
      <TextField id="standard-basic" label="Date of Birth" variant="standard" onChange={(event) => setDateOfBirth(event.target.value)}/>
      <TextField id="standard-basic" label="Gender" variant="standard"onChange={(event) => setGender(event.target.value)} />
      <TextField id="standard-basic" label="Contact Number" variant="standard" onChange={(event) => setContactNumber(event.target.value)}/>
      <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setEmail(event.target.value)}/>
      <TextField id="standard-basic" label="Password" variant="standard" onChange={(event) => setPassword(event.target.value)}/>
      <TextField id="standard-basic" label="Role" variant="standard" onChange={(event) => setRole(event.target.value)} /> 
      <Link to="/login">
          <button onClick={handleOnSignup} >Create</button>
      </Link>
      <Link to="/login"><p>Already have an account? Login</p></Link>
    </div>
    
  )
}
