import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Sign/Login/Login";
import Registration from "../pages/Sign/Registration/Registration";
import Class from "../pages/Class/Class";
import Instructor from "../pages/Instructor/Instructor";
import Dashboard from "../Layouts/Dashboard";
import MyClass from "../pages/DashBoard/MyClass/MyClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddClass from "../pages/DashBoard/AddClass/AddClass";
import SeeMyClass from "../pages/DashBoard/SeeMyClass/SeeMyClass";
import Update from "../pages/DashBoard/Update/Update";
import ManageClasses from "../pages/DashBoard/ManageClasses/ManageClasses";
import Payments from "../pages/DashBoard/Payments/Payments";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import Enrolled from "../pages/DashBoard/Enrolled/Enrolled";
import Error from "../components/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
    errorElement: <Error></Error>,
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'myclass',
        element: <MyClass></MyClass>
      },
      {
        path: 'history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path: 'enrolled',
        element: <Enrolled></Enrolled>
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
        loader: ({params}) => fetch(`https://sports-academic-server.vercel.app/class/${params.id}`)
      },
      {
        path: '/dashboard/manageclass',
        element: <ManageClasses></ManageClasses>
      }, 
      {
        path: '/dashboard/payment/:id',
        element: <Payments></Payments>,
        loader: ({params}) => fetch(`https://sports-academic-server.vercel.app/select/${params.id}`)
      }
    ]
  }
]);