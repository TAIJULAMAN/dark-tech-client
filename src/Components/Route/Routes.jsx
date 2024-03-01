import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Services/Services/Services";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Checkout from "../Pages/Services/Checkout/Checkout";
import Bookings from "../Pages/Services/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
          {
              path: "/",
              element: <Home/>
          },
          {
              path: "/Services",
              element:<Services/>
          },

          {
            path: "/checkout/:id",
            element: <Checkout/> ,            
          },
          {
            path: "/Login",
            element:<LogIn/>
        },
          {
            path: "/signup",
            element:<SignUp/>
        } ,
        {
          path: "/bookings",
          element:<PrivateRoute> <Bookings/></PrivateRoute>
         
      } 
        ]
      }
  ]);