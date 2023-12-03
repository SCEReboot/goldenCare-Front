import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, FormControl, FormLabel, Icon, Input, InputAdornment, TextField } from '@mui/material'
import signup from '../../Services/sign.service'
import './Signup.css'
import logo from '../../assets/golden.png'



export default function Signup () {

  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [date_of_birth, setDateOfBirth] = useState('')
  const [gender, setGender] = useState('')
  const [contact_number, setContactNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const navigate = useNavigate()


  async function handleOnSignup(){
    try{
      const response = await signup({ first_name, last_name, date_of_birth, gender, contact_number, email, password, role })
      console.log(response)
      localStorage.setItem("email", response.email)
      localStorage.setItem("token", response.token)
      localStorage.setItem("role", response.role)
      navigate("/login")
    }
    catch(error){
      console.log(error)
    }
  }

  async function handleOnLogin(){
    try{
      navigate("/login")
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <Box className="signupContainer">
      <CardMedia
        component="img"
        margin="auto"
        sx={{ height: 190 }}
        image={logo}
        display="flex"
      />
      < Card  sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', background: 'linear-gradient(transparent, #e2f9e2)'}} >
  
      <CardHeader title="Sign Up"></CardHeader>

      <CardContent>

        <TextField
          label="Fist Name"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setFirstName(event.target.value)}> 
        </TextField>

        <TextField
          label="Last Name"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setLastName(event.target.value)}>
        </TextField>


        <TextField
          label="Gender"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setGender(event.target.value)}
        ></TextField>

        <TextField
          label="Contact Number"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setContactNumber(event.target.value)}>
        </TextField>

        <TextField
          label="Email"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setEmail(event.target.value)}>
        </TextField>

        <TextField
          label="Password"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setPassword(event.target.value)}
        ></TextField>

        <TextField
          label="Are you a family member or a nurse?"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setRole(event.target.value)}
        ></TextField>

      </CardContent>
  
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>

        <Button  sx={{backgroundColor: ' rgb(228, 228, 228)', color:'black'}} onClick={handleOnSignup} size="small"  variant="contained" >
          Register
        </Button>

        <Button onClick={handleOnLogin} size="small" color="success" variant="contained">
          Login
        </Button>

      </CardActions>

    </Card>

    </Box>
    </>







    // <div className='form'>
    //   <h1>Create an Account</h1>
    //   <TextField id="standard-basic" label="First Name" variant="standard" onChange={(event) => setFirstName(event.target.value)}/>
    //   <TextField id="standard-basic" label="Last Name" variant="standard" onChange={(event) => setLastName(event.target.value)}/>
    //   <TextField id="standard-basic" label="Date of Birth" variant="standard" onChange={(event) => setDateOfBirth(event.target.value)}/>
    //   <TextField id="standard-basic" label="Gender" variant="standard"onChange={(event) => setGender(event.target.value)} />
    //   <TextField id="standard-basic" label="Contact Number" variant="standard" onChange={(event) => setContactNumber(event.target.value)}/>
    //   <TextField id="standard-basic" label="Email" variant="standard" onChange={(event) => setEmail(event.target.value)}/>
    //   <TextField id="standard-basic" label="Password" variant="standard" onChange={(event) => setPassword(event.target.value)}/>
    //   <TextField id="standard-basic" label="Role" variant="standard" onChange={(event) => setRole(event.target.value)} /> 
    //   <Link to="/login">
    //       <button onClick={handleOnSignup} >Create</button>
    //   </Link>
    //   <p>Already have an account? <Link to="/login">Login</Link></p>
    // </div>
    
  )
}
