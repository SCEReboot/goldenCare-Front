import { Box } from "@mui/material" 
import PatientCard from "../PatientCard/PatientCard" 
import "./ListPatients.css" 
import React from "react" 
import AddButton from "../ButtonAdd/ButtonAdd" 
import { Link } from "react-router-dom" 

function ListPatients({ patients }) {
  console.log(patients)
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Patients</h2>
        <Link to="/home/formPatient">
          <AddButton />
        </Link>
      </Box>
      <Box
        sx={{
          borderRadius: "18px",
          overflowX: "auto",
          flexWrap: "wrap",
          display: "flex",
          height: "25vh",
          background: "transparent",
        }}
      >
        <Box sx={{ display: "flex" }}>
          {patients &&
            patients.map((patient) => (
              <PatientCard
              
                sx={{ textAlign: "center" }}
                key={patient.id}
                patient={patient}
              />
            ))}
        </Box>
      </Box>
    </>
  )
}

export default ListPatients 
