
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import logo from '../../assets/golden.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function MediaControlCard({user}) {
  const theme = useTheme();

  return (
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
            {`${user.first_name} ${user.last_name}` }
          </Typography>

          <Link >
            <Typography variant="subtitle1" color="text.secondary" component="div">
            {`${user.email}`}
            </Typography>
          </Link>

        </CardContent>
      </Box>
  
    </Card>
  )
}