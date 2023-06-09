import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Sign/Login/Login";
import Registration from "../pages/Sign/Registration/Registration";
import Class from "../pages/Class/Class";
import Instructor from "../pages/Instructor/Instructor";
import Dashboard from "../Layouts/Dashboard";
import MyClass from "../pages/DashBoard/MyClass/MyClass";

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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        }
      ]
    }
  ]);