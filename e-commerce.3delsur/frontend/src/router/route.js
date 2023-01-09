// Para crear rutas 
// 1)npm i react-router-dom 
// 2)import de { BrowserRouter as Router, Route, Link} de la librería react-router-dom.

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Products from "../components/Products";
import  Contact  from "../components/Contact";
import PublicLayout from "../loyaut.js/PublicLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
           {
            index:true,
            element: <Home/>,
           },
          {
            path:"/products",
            element: <Products/>,
          },
          {
            path:"/contact",
            element:<Contact/>,
          }
]}


])
export default router;

