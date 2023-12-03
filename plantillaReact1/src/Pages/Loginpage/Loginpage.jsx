import { Email, Lock, VisibilityOff } from "@mui/icons-material"
import React, { useState } from "react"
import './Loginpage.css'
import { useNavigate } from "react-router-dom"
import login from "../../Services/auth.service"
import logo from '../../assets/golden.png'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Icon,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material"


export default function Login() {

  // const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  async function handleOnRegister() {
    try{
      navigate('/signup')

    } catch(error){
      console.log(error)
    }
  }
  async function handleOnLogin() {
    try{
            const response = await login({ email,password})  // todo eliminar
      // const response = await login({ email, password, role})  // todo descomentar
      console.log(response)

      localStorage.setItem("email", response.email)
      localStorage.setItem("token", response.token)
      localStorage.setItem("id", response.userId)
      localStorage.setItem("role", response.role)  //no estoy segura si necesito el token

      navigate("/home")

    } catch(error){
      console.log(error)
    }
  }

  return (
<>
      <Box className="loginContainer">
      <CardMedia
        component="img"
        margin="auto"
        sx={{ height: 190 }}
        image={logo}
        display="flex"
      />
      <Card  sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', background: 'linear-gradient(transparent, #e2f9e2)'}} >
  
      <CardHeader title="Log In"></CardHeader>
      <CardContent>
        <TextField
          label="Email"
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setEmail(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Email />
                </Icon>
              </InputAdornment>
            )
          }}


        ></TextField>
        <TextField
          label="Password"//Todo: eliminar
          variant="standard"
          margin="dense"
          fullWidth={true}
          size='small'
          color='success'
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Lock />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <VisibilityOff />
                </IconButton>
              </InputAdornment>
            )
          }}
        ></TextField>
      </CardContent>
      <textField  size ="small"> Forgot youyr password?</textField>  {/*colocar a la derecha */}

      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button  sx={{backgroundColor: ' rgb(228, 228, 228)', color:'black'}} onClick={handleOnRegister} size="small" variant="contained">
          Register
        </Button>
        <Button onClick={handleOnLogin} size="small" color="success" variant="contained">
          Login
        </Button>
      </CardActions>
    </Card>
    </Box>
  </>
  )
}
