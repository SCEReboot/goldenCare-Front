import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonDone from "../ButtonDone/ButtonDone";

function TaskCard({ task, onHandleUpdateTask }) {
  const [completed, setCompleted] = useState(task.completed);

  return (
    <>
      {!completed && (
        <Card
          sx={{
            borderRadius: "18px",
            height: "5vh",
            width: "90vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background:
              "linear-gradient(to bottom, transparent, #f9dab9), url(/src/assets/fondo.png)",
          }}
      
        >
          <ButtonDone
            setCompleted={setCompleted}
            completed={completed}
            tCompleted={task.completed}
            id={task.id}
            onHandleUpdateTask={onHandleUpdateTask}
          />

            <CardContent sx={{ width: "100%", flex: "1 0 auto" }}>
              <Typography component="div" variant="h17">
                {`${task.title_description}`}
              </Typography>
            </CardContent>

        </Card>
      )}
      {completed && (
        <Card
          sx={{
            borderRadius: "18px",
            height: "5vh",
            width: "90vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background:
              "linear-gradient(to bottom, transparent, #e2f9e2), url(/src/assets/fondo.png)",
          }}
        >
            <ButtonDone
              setCompleted={setCompleted}
              completed={completed}
              tCompleted={task.completed}
              id={task.id}
              onHandleUpdateTask={onHandleUpdateTask}
            />
            <CardContent sx={{ width: "100%", flex: "1 0 auto", alignItems: "center"}}>
              <Typography component="div" variant="h17">
                {`${task.title_description} `}
              </Typography>
            </CardContent>
        </Card>
      )}
    </>
  );
}

export default TaskCard;
