import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import RootLayout from './Layout/RootLayout.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
    index: true,
    Component: Home
    
  },
  {
    path: "/home",
    Component: Home
  },
  {
    path: "/About",
    Component: About
  },
  {
    path: "/Contact",
    Component: Contact
  }
    ]
  }
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
