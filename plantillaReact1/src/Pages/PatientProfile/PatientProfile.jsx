import React, { useEffect, useState } from 'react'
 import { Box } from "@mui/material"
 import ListTasksBox from "../../Components/ListTasks/ListTasks"
 import {getAllPatientData} from "../../Services/patient.service"
 import { useLocation } from 'react-router-dom'
function PatientProfile() {
console.log(patient)
const location = useLocation()

    const [allPatientData, setAllPatinetData] = useState({})   
    const [tasks, setTasks] = useState()   
    const [refresh, setRefresh] = useState(false)   
  
    // const {state:{patient}}=useLocation()   
    // console.log(patient)
    useEffect(() => {
      patientData()
      setAllPatinetData(data)   
    })
  

    async function patientData() {
      try {
        const data = await getAllPatientData()   
     
      } catch (error) {
        console.error("Error al obtener datos del usuario", error)   
      }
    }
  return (
    <>
    {/* <Box>{patient && <HeaderPatientProfile patient={patient} />}</Box> */}
    <Box
      sx={{
      
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px",
        height: "100vh",
        backgroundSize: "contain",
        background:  "linear-gradient(to bottom, transparent, #e2f9e2), url(/src/assets/fondo.png)",
      }}
    >
      <Box className="home">
        {tasks && localStorage.role == "relative" && (
          <ListTasksBox
          patien={allPatientData}
            tasks={tasks}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )}
        {tasks && localStorage.role == "nurse" && (
          <ListTasksBox 
          patient={allPatientData}
          tasks={tasks}
          refresh={refresh}
          setRefresh={setRefresh} />
        )}
       
    
      </Box>
    </Box>
  </>
  )
}

export default PatientProfile