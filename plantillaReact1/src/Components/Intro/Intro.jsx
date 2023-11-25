import { Box } from "@mui/material"
import "./Intro.css"
import React from "react"

import { Link } from 'react-router-dom'

function Intro() {
    
  return (
  
      <Box className="infoIntro">

        <h1>Welcome to Golden Care!</h1>
        <p>Bringing Families and Caregivers Together to Offer Warm Support to Our Seniors.</p>
        <p>Because Your Loved Ones Deserve the Best, and We're Here to Make It Happen!</p>
        <div className="image-container">
          {/* <img src="./assets/fondo.png" alt="" className="FondoDeHome"/> */}

        </div>
        <div className="buttons">    

            <Link to="/signup">   <button >Create Account</button>    </Link>
            <Link to="/login">    <button >Sign In</button>   </Link>

        </div>
      
      </Box>
     

  )
}

export default Intro
