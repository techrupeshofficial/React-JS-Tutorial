import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


function App() {

  return (
    <>
    <RouterProvider router={router} />
    
    </>
  )
}

export default App