import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router  from "./router/route";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarritoProvider} from './context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarritoProvider><RouterProvider router={router} /></CarritoProvider>);

