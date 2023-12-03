import React, { useState } from "react"  
import "./FormTask.css"  
import {
  TextField,
  Box,
  Button,
  Modal,
  Card,
  CardMedia,
  Typography,
} from "@mui/material"  
import { createTask } from "../../Services/task.service"  
import { Link, useNavigate } from "react-router-dom"  
import SelectPatient from "../SelectPatient/SelectPatient"  
import logo from "/src/assets/golden.png"  
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"  
function FormTask({ patients }) {
  const navigate = useNavigate()  

  const [title_description, setTitleDescription] = useState("")  
  const [task_description, setTaskDescription] = useState("")  

  const [patientId, setPatientId] = useState("")  
  const [nurse, setNurse] = useState("")  
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: 2,
    bgcolor: " #e2f9e2",
    border: "0.5px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  }  

  async function handleOnCreate() {
    try {
      console.log(patientId)
      const response = await createTask({
        title_description,
        task_description,
        patientId: patientId,
      })  
      console.log(response)  
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:
            "linear-gradient(to bottom, transparent, #e2f9e2), url(/src/assets/fondo.png)",
        }}
      >
        <Box sx={{ display: "flex", width: "100vw" }}>
          <Link to="/home">
            <ChevronLeftIcon
              color="success"
              sx={{ marginTop: "20px", marginLeft: "10px" }}
            />
          </Link>

          <CardMedia
            component="img"
            sx={{ marginLeft: "-30px", width: 151 }}
            image={logo}
            alt="GoldenCare.IMG"
          />
          <Typography
            sx={{ display: "flex", marginTop: "15%" }}
            component="div"
            variant="h5"
          >
            {`Create new Task`}
          </Typography>
        </Box>
        <Card
          sx={{
            border: "0.5px solid #e2f9e2",
            boxShadow: "0 4px 8px 0 ",
            padding: "3vh",
            overflowY: "scroll",
            width: "80vw",
            height: "40vh",
            marginTop: "2vh",
            justifyContent: "space-between",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(to bottom, #e2f9e2)",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              marginBottom: "2vh",
              justifyContent: "center",
              color: "grey",
            }}
          >
           Add a new Task
          </Typography>

          <TextField
            color="success"
            id="standard-basic"
            label="Title"
            variant="standard"
            onChange={(event) => setTitleDescription(event.target.value)}
          />
          <TextField
            sx={{
              marginTop: "15px",
            }}
            color="success"
            id="standard-multiline-static "
            label="Description Task..."
            multiline
            maxRows={4}
            fullWidth
            variant="outlined"
            onChange={(event) => setTaskDescription(event.target.value)}
          />
          <SelectPatient patients={patients} setPatientId={setPatientId} />
          <Button
            sx={{
              border: "0.5px solid #e2f9e2",
              boxShadow: "0 4px 8px 0 ",
              background: "#e2f9e2",
              color: "grey",
              marginTop: "10px",
              width: "35vw",
            }}
            onClick={handleOnCreate}
          >
            Create
          </Button>
        </Card>
      </Box>
    </>
  )  
}

export default FormTask  
