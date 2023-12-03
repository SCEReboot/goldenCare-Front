import React, { useEffect, useState } from "react";
import { getAllDataUser, getMyTasks } from "../../Services/user.service";
import ListPatients from "../../Components/ListPatients/ListPatients";
import CardProfile from "../../Components/CardProfile/CardProfile";
import { Box } from "@mui/material";
import ListTasksBox from "../../Components/ListTasks/ListTasks";
import "./Home.css";
function Home() {
  const [allOwnData, setAllOwnData] = useState({});
  const [tasks, setTasks] = useState();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getAllOwnData();
   
  }, [refresh]);

  async function getAllOwnData() {
    try {
      const data = await getAllDataUser();
      const tasks = await getMyTasks();
      console.log(data);
      setTasks(tasks);
      setAllOwnData(data);
    } catch (error) {
      console.error("Error al obtener datos del usuario", error);
    }
  }

  return (
    <>
      <Box>{allOwnData && <CardProfile user={allOwnData} />}</Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "18px",
          width: "100vw",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          background:  "linear-gradient(to bottom, transparent, #e2f9e2), url(/src/assets/fondo.png)",
        }}
      >
        <Box className="home">
          {allOwnData && localStorage.role == "relative" && (
            <ListPatients 
            patients={allOwnData.relativePatient} />
          )}{" "}
          {allOwnData && localStorage.role == "nurse" && (
            <ListPatients patients={allOwnData.patients} />
          )}
          {tasks && localStorage.role == "relative" && (
            <ListTasksBox
            user={allOwnData}
              tasks={tasks}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          )}
          {tasks && localStorage.role == "nurse" && (
            <ListTasksBox 
            user={allOwnData}
            tasks={tasks}
            refresh={refresh}
            setRefresh={setRefresh} />
          )}
         
      
        </Box>
      </Box>
    </>
  );
}
// estoy aqui
export default Home;
