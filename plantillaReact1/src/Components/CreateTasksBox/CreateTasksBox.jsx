import React from 'react'
import { Box, Card, CardContent, Typography} from '@mui/material'
import './CreateTasksBox.css'
import { Link } from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


function CreateTaskBox({user}) {//cambie patients for user

  return (
    <>
    <Box sx={{ display: 'flex' , justifyContent:'space-around'}}>
    <Card sx={{height: '18vh', width: '25vw', display:'fle', flexDirection: 'column', alignItems: 'center',  background: 'linear-gradient(to bottom, transparent, #e2f9e2), url(/src/assets/fondo.png)'}}>
    <AccountCircleRoundedIcon sx={{ width: '100%',height: '50%', marginBottom:'-15%'}}/>
  
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardContent sx={{  width: '100%', flex: '1 0 auto' }}>
        <Link to="/home/task" state={{ user: user }} >
          <Typography component="div" variant="h17">
            {`Create New Task` }
          </Typography>

          </Link>

        </CardContent>
      </Box>
  
    </Card>
    </Box>

    {/* <Box className="TasksContainer">
        <h1>Tasks</h1>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
        <ListItem alignItems="flex-start">
        <Link to="/home/tasks">
            <ListItemText
            secondary={
                <React.Fragment>
                {"- Create a new task."}
                </React.Fragment>
            }
            />
            </Link>
        </ListItem>
    
        <Divider variant="inset" component="li" />
        
        </List>
    </Box> */}
    </>
  )
}

export default CreateTaskBox 
   
    