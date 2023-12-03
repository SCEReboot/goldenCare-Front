import { Box, Button, Modal } from '@mui/material'
import React from 'react'

function TaskModal(task, modal1Open, setModal1Open ,handleCloseModal1) {


  return (
 <Modal
                open={modal1Open}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
              >
                <Box sx={{ ...style, width: 300 ,  background:"#f9dab9"}}>
                  <h4 id="modal-title" style={{color: "black" }}>
                   {task.title_description}
                  </h4>
                  <p id="modal-description" style={{ color: "grey" }}>
                    {task.task_description}
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

  )
}

export default TaskModal