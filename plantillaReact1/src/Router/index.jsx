import { createBrowserRouter, redirect } from "react-router-dom"
import Welcome from "../Pages/Welcome/welcome"

import Loginpage from "../Pages/Loginpage/loginpage"
import Signup from "../Pages/Signup/Signup"
import Home from "../Pages/Home/Home"

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
    element: <Home />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/");
      } else {
        return null;
      }
    },
    children : [
      {
        path: "/home",
        element: <Home />,
      },

    ]
  

  }
])
export default router;
