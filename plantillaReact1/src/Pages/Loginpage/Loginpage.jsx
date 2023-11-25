import { Email, Visibility, VisibilityOff } from "@mui/icons-material"
import {
  Box,
  Button,
  TextField,
} from "@mui/material"
import React, { useState } from "react"
import './Loginpage.css'
import { Link } from "react-router-dom"
import  login  from "../../Services/auth.service"

export default function Login() {

  // const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  async function handleOnLogin() {
    try{
      const response = await login({ email, password, role})  // crear
      console.log(response)
      localStorage.setItem("email", response.email)
      localStorage.setItem("token", response.token)
      localStorage.setItem("role", response.role)  //no estoy segura si necesito el token
    } catch(error){
      console.log(error)
    }
  }

  return (
    <>
    <Box className="signContainer">
   
        <h1>HELLO!</h1>
        <p>Sing Into Your Account</p>
   
   
        <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setEmail(event.target.value)}/>
        <TextField id="standard-basic" label="Password" variant="standard" onChange={(event) => setPassword(event.target.value)}/>
        <Link to="/home">    <Button onClick={handleOnLogin}>Login</Button>     </Link>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
       </Box>
    </>
  );
}
