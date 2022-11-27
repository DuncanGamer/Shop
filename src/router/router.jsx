/* eslint-disable react/react-in-jsx-scope */

import { createBrowserRouter } from "react-router-dom"

import Errorpage from "../components/pages/Errorpage"
import Home from "../components/pages/Home"
import Products from "../components/pages/Products"
import App from "../components/template/App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Errorpage />,
        children: [
            {
            path: "/products",
            element: <Products/>,
            },
            {
            index: true,
            element: <Home/>,        
            }
        ]
        
    },
    ])


export default router