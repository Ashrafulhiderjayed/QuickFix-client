import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Shop from "../Pages/Shop/Shop";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/Admin/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/Admin/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/UserDashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/Payment/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserDashboard/Payment/UserHome/UserHome";
import ServicesDetails from "../Pages/ServicesDetails/ServicesDetails";
import Appointment from "../Pages/Appointment/Appointment";
import MyAppointments from "../Pages/Dashboard/UserDashboard/Payment/MyAppointments/MyAppointments";
import ManageAppointments from "../Pages/Dashboard/Admin/ManageAppointments/ManageAppointments";

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
        path: 'appointment',
        element: <Appointment></Appointment>
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: '/service/:id',
        element: <ServicesDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      // normal users routes here
      {
        path: "userHome",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "myAppointments",
        element: <MyAppointments />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      // Admin routes here
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome /></AdminRoute>,
      },
      {
        path: "users",
        element: <AdminRoute> <AllUsers /> </AdminRoute>,
      },
      {
        path: "addItems",
        element: <AdminRoute> <AddItems /> </AdminRoute>,
      },
      {
        path: "manageItems",
        element: <AdminRoute> <ManageItems /> </AdminRoute>,
      },
      {
        path: "manageAppointments",
        element: <AdminRoute> <ManageAppointments /> </AdminRoute>,
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute> <UpdateItem /> </AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/shop/${params.id}`)
      },
    ],
  },
]);

export default router;