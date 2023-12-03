import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Modal,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
import { createPatient } from "../../Services/user.service";
import { useNavigate } from "react-router-dom";
import "./FormPatient.css";
import SelectPlaceHolder from "../SelectPlaceHolder/SelectPlaceHolder";
import { assignPatientNurse } from "../../Services/user.service";
import logo from "../../assets/golden.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function FormPatient() {

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [blood_type, setBloodType] = useState("");
  const [chronic_illnesses, setCronicIllnesses] = useState("");
  const [allergies, setAllergies] = useState("");
  const [dietary_type, setDietaryType] = useState("");
  const [mobility_requirements, setMobilityRequirements] = useState("");
  const [emergency_protocol, setEmergencyProtocol] = useState("");
  const [biography, setBiography] = useState("");
  const [doctor_contact, setDoctorContact] = useState("");
  const [photo_patient, setPhotoPatient] = useState("");
  const [patientId, setPatientId] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [nurse, setNurse] = useState("");
  const navigate = useNavigate();

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
  };

  async function handleOnCreate() {
    try {
      const response = await createPatient({
        first_name,
        last_name,
        date_of_birth,
        gender,
        blood_type,
        chronic_illnesses,
        allergies,
        dietary_type,
        mobility_requirements,
        emergency_protocol,
        biography,
        doctor_contact,
        photo_patient,
      })
      setPatientId(response.patientId);
      setModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCloseModal() {
    setModalOpen(false)

    try {
      const response = await assignPatientNurse({
        userId: nurse,
        patientId,
      })
    
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
          <Typography
            sx={{ display: "flex", marginTop: "15%" }}
            component="div"
            variant="h5"
          >
            {`Create new Patient`}
          </Typography>
        </Box>
        <Card
          sx={{
            border: "0.5px solid #e2f9e2",
            boxShadow: "0 4px 8px 0 ",
            padding: "3vh",
            overflowY: "scroll",
            width: "80vw",
            height: "60vh",
            marginTop: "2vh",
            justifyContent: "space-between",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(to bottom, #e2f9e2)",
          }}
        >
          <Typography sx={{ display: "flex",    marginBottom: "2vh", justifyContent: "center", color: "grey"}}>Personal Data</Typography>
          <TextField
            color="success"
            id="standard-basic"
            label="First Name"
            // defaultValue={"Rosario"}
            variant="standard"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            color="success"
            id="standard-basic"
            label="Last Name"
            // defaultValue={"Martinez"}
            variant="standard"
            onChange={(event) => setLastName(event.target.value)}
          />
          {/* <TextField
            color="success"
            id="standard-basic"
            label="Date of Birth"
            defaultValue={"2022-01-01"}
            variant="standard"
            onChange={(event) => setDateOfBirth(event.target.value)}
          /> */}
          <TextField
            color="success"
            id="standard-basic"
            label="Gender"
            // defaultValue={"female"}
            variant="standard"
            onChange={(event) => setGender(event.target.value)}
          />
          <Typography sx={{ display:  "flex",    marginBottom: "2vh", marginTop: "2vh", justifyContent: "center", color: "grey"}}>Medical Data</Typography>

          <TextField
            color="success"
            id="standard-basic"
            label="Blood type"
            // defaultValue={"AB+"}
            variant="standard"
            onChange={(event) => setBloodType(event.target.value)}
          />
          <TextField
            color="success"
            id="standard-basic"
            label="Chronic illnesses"
            // defaultValue={"Diabetes"}
            variant="standard"
            onChange={(event) => setCronicIllnesses(event.target.value)}
          />
          <TextField
            color="success"
            id="standard-basic"
            label="Allergies"
            // defaultValue={"Penicillin"}
            variant="standard"
            onChange={(event) => setAllergies(event.target.value)}
          />
          <TextField
            color="success"
            id="standard-basic"
            label="Dietary Type"
            // defaultValue={"vegetarian"}
            variant="standard"
            onChange={(event) => setDietaryType(event.target.value)}
          />
          <TextField
            color="success"
            id="standard-basic"
            label="Mobility Requirements"
            // defaultValue={"Yes"}
            variant="standard"
            onChange={(event) => setMobilityRequirements(event.target.value)}
          />
          <TextField
            color="success"
            id="standard-basic"
            label="Emergency Protocol"
            // defaultValue={"Llamar a 911 o 676-555-5555"}
            variant="standard"
            onChange={(event) => setEmergencyProtocol(event.target.value)}
          />
          <Typography sx={{ display: "flex",    marginBottom: "2vh", marginTop: "2vh", justifyContent: "center", color: "grey"}}>Additional Data</Typography>

          <TextField
            color="success"
            id="standard-basic"
            label="Doctor Contact"
            // defaultValue={"676-555-5555"}
            variant="standard"
            onChange={(event) => setDoctorContact(event.target.value)}
          />
          <TextField
            color="success"
            id="standard-basic"
            label="photo Patient"
            // defaultValue={"https://picsum.photos/200/300"}
            variant="standard"
            onChange={(event) => setPhotoPatient(event.target.value)}
          />
          <TextField
            sx={{
              marginTop: "3vh",
            }}
            color="success"
            id="standard-multiline-static"
            label="Biography"
            // defaultValue={
            //   "Rosario Martinez es una mujer sabia y llena de vivencias, ha dedicado toda su vida al cuidado de su familia. Con una pasión por la jardinería y la lectura, ha dejado una huella de amor y aprendizaje en cada etapa de su enriquecedora vida."
            // }
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            onChange={(event) => setBiography(event.target.value)}
          />
        </Card>
        <Button
          sx={{
            marginTop: "5vh",
            borderRadius: "10px",
            border: "0.5px solid #e2f9e2",
            boxShadow: "0 4px 8px 0 ",
            backgroundColor: " #e2f9e2",
            color: "grey",
            width: "45vw",
          }}
          onClick={handleOnCreate}
        >
          Create
        </Button>
        <Modal
          open={modalOpen}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={{ ...style, width: 300 , background:"#f9dabe2f9e29"}}>
            <h4 id="modal-title" style={{ color: "grey" }}>
              Patient has been created successfully!
            </h4>
            <p id="modal-description" style={{ color: "black" }}>
              Do you want to add a nurse?
            </p>
            <SelectPlaceHolder setNurse={setNurse} />
            <Button
              sx={{background: "#e2f9e2" , color: "grey", marginTop: "10px", width: "35vw" }}
              onClick={handleCloseModal}
            >
              Save
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
