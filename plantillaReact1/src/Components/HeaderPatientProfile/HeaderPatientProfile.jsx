import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import logo from '../../assets/golden.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

export default function CardPatientProfile(props) { 

  console.log(props.patient)
  return (

<>
<Card sx={{ display: 'flex', background:'tranparent' }}>
        <ChevronLeftIcon color='success' sx={{ marginTop: "20px", marginLeft: "10px" }} />
    
        <CardMedia
          component="img"
          sx={{ marginLeft: "-30px", width: 151 }}
          image={logo}
          alt="GoldenCare.IMG"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' ,marginTop: '10%'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
            
          <Typography component="div" variant="h6">
            {`${props.patient.first_name} ${props.patient.last_name}` }
          </Typography>
          <Link >
            <Typography variant="subtitle1" color="text.secondary" component="div">
            {/* {`${user.email}`} */}
            </Typography>
          </Link>
        </CardContent>
      </Box>
  
    </Card>


    </>
  )
}