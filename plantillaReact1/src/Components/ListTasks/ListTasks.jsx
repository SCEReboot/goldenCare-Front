import { Box, Button, Modal, Typography } from "@mui/material"  
import React, { useState } from "react"  
import TaskCard from "../TaskCard/TaskCard"  
import { updateTask } from "../../Services/task.service"  
import AddButton from "../ButtonAdd/ButtonAdd"  
import { Link } from "react-router-dom"  

function ListTasks({ tasks, setRefresh, refresh, user }) {
  const [modal1Open, setModal1Open] = useState(false)  
 const [selectedTask, setSelectedTask] = useState()

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

  function handleOpenModal1(task) {
    setSelectedTask(task)
    setModal1Open(true)
  }
  async function handleCloseModal1() {
    setModal1Open(false)
  }
  async function handleUpdateTask(data) {
    try {
      const respones = await updateTask(data)
      setRefresh(!refresh)
    } catch (error) {
      console.log(error)
    }
  }

  const completedTasks = tasks.filter((task) => task.completed)
  const incompleteTasks = tasks.filter((task) => !task.completed)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Tasks</h2>
        <Link to="/home/task" state={{ user: user }}>
          <AddButton />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* incompleted */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
        
            flexDirection: "column",
          }}
        >
          <Typography variant="h17" sx={{  color: "grey",textAlign:'left'}}>Incompleted: {incompleteTasks.length }</Typography>
          {incompleteTasks.map((task) => (
            <>
            <Button  onClick={()=> handleOpenModal1(task)}>
              <TaskCard
                key={task.id}
                task={task}
                onHandleUpdateTask={handleUpdateTask}
              />
            </Button>
            </>
          ))}
        </Box>
        {/* completed */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            flexDirection: "column",
            opacity: "0.9",
          }}
        >
        <Typography variant="h17" sx={{  color: "grey",textAlign:'left'}}>Completed: {completedTasks.length }</Typography>
          {completedTasks.map((task) => (
            <>
              <Button  onClick={()=> handleOpenModal1(task)}>
                <TaskCard
                  key={task.id}
                  task={task}
                  onHandleUpdateTask={handleUpdateTask}
                />
              </Button>
              <Modal
              task={task}
                open={modal1Open}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <Box sx={{ ...style, width: 300 , background:"#e2f9e2"}}>
                  <h4 id="modal-title" style={{ color: "black"  }}>
                   {task.title_description}
                  </h4>
                  <p id="modal-description" style={{ color: "gray" }}>
                  {task.task_description}
                  </p>
                  <Button
                    sx={{
                      background: "#e2f9e2",
                      color: "grey",
                      marginTop: "10px",
                      width: "35vw",
                    }}
                    onClick={handleCloseModal1}
                  >
                    Ok
                  </Button>
                  <Button
                    sx={{
                      background: "#e2f9e2",
                      color: "grey",
                      marginTop: "10px",
                      width: "35vw",
                    }}
                    onClick={handleCloseModal1}
                  >
                    Delete
                  </Button>
                </Box>
              </Modal>
            </>
          ))}
        </Box>
      </Box>
      <Modal
       
              open={modal1Open}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box sx={{ ...style, width: 300 ,  background:"#f9dab9"}}>
                <h4 id="modal-title" style={{color: "black" }}>
                 {selectedTask?.title_description}
                </h4>
                <p id="modal-description" style={{ color: "grey" }}>
                  {selectedTask?.task_description}
                </p>
                <Button
                  sx={{
                    background: "#f9dab9",
                    color: "grey",
                    marginTop: "10px",
                    width: "35vw",
                  }}
                  onClick={handleCloseModal1}
                >
                  Ok
                </Button>
                <Button
                  sx={{
                    background: "#f9dab9",
                    color: "grey",
                    marginTop: "10px",
                    width: "35vw",
                  }}
                  onClick={handleCloseModal1}
                >
                  Delete
                </Button>
              </Box>
            </Modal>
    </>
  )
}

export default ListTasks
