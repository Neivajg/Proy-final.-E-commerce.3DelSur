import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import router  from "./router/route";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarritoProvider} from './context';
import {LoginProvider} from './contextlogin'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginProvider><CarritoProvider><RouterProvider router={router} /></CarritoProvider></LoginProvider> );

