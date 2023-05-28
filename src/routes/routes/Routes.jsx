import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Home from "../../pages/home/home/Home";
import Menu from "../../pages/menu/menu/Menu";
import Shop from "../../pages/shop/shop/Shop";
import Signin from "../../pages/signin/Signin";
import Signup from "../../pages/signup/Signup";

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
            }
        ]
    },
]);