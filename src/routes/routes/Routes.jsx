import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/home/home/Home";
import Menu from "../../pages/menu/menu/Menu";
import Shop from "../../pages/shop/shop/Shop";
import Signin from "../../pages/signin/Signin";
import Signup from "../../pages/signup/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Dashboard from "../../layout/Dashboard";
import MyCart from "../../pages/dashboard/myCart/MyCart";
import AllUsers from "../../pages/dashboard/allusers/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <Menu></Menu>
            },
            {
                path: "shop/:category",
                element: <Shop></Shop>
            },
            {
                path: "signin",
                element: <Signin></Signin>
            },
            {
                path: "signup",
                element: <Signup></Signup>
            },
            {
                path: "private",
                element: <PrivateRoute><h1 className="text-9xl">Private Route</h1></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "mycart",
                element: <MyCart></MyCart>
            },
            {
                path: "allusers",
                element: <AllUsers></AllUsers>
            },
        ]
    }
]);