import React from 'react';
import MainPage from './Pages/MainPage/MainPage';
import Contact from './Pages/Contact/Contact';
import About from './Pages/AboutUs/AboutUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const basePath = window.location.pathname;

const router = createBrowserRouter([
  {
    path: `${basePath}/`,
    element: <MainPage />,
  },
  {
    path: `${basePath}/contact`,
    element: <Contact />,
  },
  {
    path: `${basePath}/about`,
    element: <About />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
