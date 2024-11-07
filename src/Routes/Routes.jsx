import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/Cart/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'shop',
        element: <Shop />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      // Add dashboard routes here
      {
        path: "cart",
        element: <AdminRoute><Cart /></AdminRoute>,
      },

      // Admin routes here
      {
        path: "users",
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
    ],
  },
]);

export default router;