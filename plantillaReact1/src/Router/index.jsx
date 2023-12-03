import { createBrowserRouter, redirect } from "react-router-dom"
import Welcome from "../Pages/Welcome/Welcome.jsx"
import Loginpage from "../Pages/Loginpage/loginpage"
import Signup from "../Pages/Signup/Signup"
import Home from "../Pages/Home/Home"
import Root from "../Layouts/Root"
import CreatePatient from '../Components/FormPatient/FormPatient'
import Task from "../Pages/Task/Task"
import AddNurseToPatient from "../Pages/AddNurseToPatient/AddNurseToPatient"
import PatientProfile from "../Pages/PatientProfile/PatientProfile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  { 
    path: "/home",
    element: <Root />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        console.log('redirect')
        return redirect("/");
      } else {
        return null;
      }
    },
    children : [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/home/formPatient",
        element: <CreatePatient />
      },
      {
        path: "/home/task",
        element: <Task />
      },
      {
        path: "/home/patient/:id",
        element: <PatientProfile />
      },
      {
        path: "/home/:patientId/addNurse",
        element: <AddNurseToPatient />
      },
  

    ]
  

  }
])
export default router;
