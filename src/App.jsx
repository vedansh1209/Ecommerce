import React from 'react'
import MainPage from './Pages/MainPage/MainPage'
import Contact from './Pages/Contact/Contact'
import About from './Pages/AboutUs/AboutUs';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const path="https://ecommerce-vedansh1209.netlify.app";

const router = createBrowserRouter([
    {
      path: "${path}/",
      element: <MainPage/>,
    },
    {
      path: "${path}/contact",
      element: <Contact/>,
    },
    {
      path: "${path}/about",
      element: <About/>,
    },
  ]);


function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;
