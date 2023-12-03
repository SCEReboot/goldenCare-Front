import { Box, Button, Typography } from "@mui/material"

import "./Intro.css"
import React from "react"
import { useNavigate } from "react-router-dom";


function Intro() {
  const navigate = useNavigate();
     function handleOnCreateAccount(){
      navigate("/signup")
    }
     function handleOnLogin(){
      navigate("/login")
    }
  return (
  <>
    <Box className="container">
      <div className="infoIntro">

        <img src="../src/assets/golden.png" alt="" className="img"/>
        <Typography gutterBottom variant="h7" component="div">
           Brindando a Familias y Cuidadores un Cálido Apoyo.
        </Typography>
       
      </div> 
      <Box sx={{ display: "flex" , justifyContent:"space-around", marginTop:"20vh"}}>    
        <Button  color="success" variant="outlined" size="large" onClick={handleOnCreateAccount}>Create Account</Button>
        <Button  color="success" variant="outlined" size="large" onClick={handleOnLogin}  > Login</Button>  
      </Box>
  </Box>
    <div className="footer">
        <Typography gutterBottom variant="h12" component="div">
          Copyright © 2023 Golden Care, trading as GC.
        </Typography>

    </div>
</>
  )
}

export default Intro
