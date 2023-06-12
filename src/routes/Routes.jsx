import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Sign/Login/Login";
import Registration from "../pages/Sign/Registration/Registration";
import Class from "../pages/Class/Class";
import Instructor from "../pages/Instructor/Instructor";
import Dashboard from "../Layouts/Dashboard";
import MyClass from "../pages/DashBoard/MyClass/MyClass";
import MyEnrolled from "../pages/DashBoard/MyEnrolled/MyEnrolled";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddClass from "../pages/DashBoard/AddClass/AddClass";
import SeeMyClass from "../pages/DashBoard/SeeMyClass/SeeMyClass";
import Update from "../pages/DashBoard/Update/Update";
import ManageClasses from "../pages/DashBoard/ManageClasses/ManageClasses";
import Payments from "../pages/DashBoard/Payments/Payments";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: 'class',
        element: <Class></Class>
      },
      {
        path: 'instructors',
        element: <Instructor></Instructor>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myclass',
        element: <MyClass></MyClass>
      },
      {
        path: 'enrolled',
        element: <MyEnrolled></MyEnrolled>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'seeclass',
        element: <SeeMyClass></SeeMyClass>
      },
      {
        path: '/dashboard/seeclass/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/class/${params.id}`)
      },
      {
        path: '/dashboard/manageclass',
        element: <ManageClasses></ManageClasses>
      }, 
      {
        path: '/dashboard/payment',
        element: <Payments></Payments>
      }
    ]
  }
]);