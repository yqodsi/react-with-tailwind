import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import './index.css'
import Home from '../components/Home'
import About from '../components/About'
// import "./App.css";
import App from "./App"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
// {
//   path: "/about",
//   element: <About/>
// }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
