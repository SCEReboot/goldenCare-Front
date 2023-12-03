import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./PatientCard.css";
import React from "react";
import { Link } from "react-router-dom"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"
import logo from "../../assets/golden.png"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"


function PatientCard({ patient }) {
  const patientId = patient.id;
  console.log(patient);

  return (
    <>
      {/* <Card sx={{ display: "flex", background: "tranparent" }}>
       <ChevronLeftIcon
          color="success"
          sx={{ marginTop: "20px", marginLeft: "10px" }}
        />

        <CardMedia
          component="img"
          sx={{ marginLeft: "-30px", width: 151 }}
          image={logo}
          alt="GoldenCare.IMG"
        />
        <Box
          sx={{ display: "flex", flexDirection: "column", marginTop: "10%" }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {`${patient.first_name} ${patient.last_name}`}
            </Typography>

            <Link>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
             {`${user.email}`} 
              </Typography>
            </Link>
          </CardContent>
        </Box>
      </Card> */}
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Link to={`/home/patient/${patientId}`} state={{ patient: patient }}>
          <Card
            sx={{
              height: "15vh",
              margin: "1.5vh",
              width: "27vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "0.5px solid #e2f9e2",
              borderRadius: "18px",
              boxShadow: "0 2px 8px 0 ",
              background:
                "linear-gradient(to bottom, transparent, #e2f9e2), url(/src/assets/fondo.png)",
            }}
          >
            <AccountCircleRoundedIcon sx={{ width: "100%", height: "55%" }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ width: "100%", padding: "0" }}>
                <Typography
                  sx={{ textAlign: "center" }}
                  component="div"
                  variant="h17"
                >
                  {`${patient.first_name} ${patient.last_name}`}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Link>
      </Box>
    </>
  );
}

export default PatientCard;
