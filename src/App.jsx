import React from 'react'
import MainPage from './Pages/MainPage/MainPage'
import Contact from './Pages/Contact/Contact'
import About from './Pages/AboutUs/AboutUs';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/about",
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
