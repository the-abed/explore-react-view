import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx'
import RootLayout from './Layout/RootLayout.jsx'
import PlantDetails from './Pages/PlantDetails.jsx'
import LoadinngSpinner from './Components/LoadinngSpinner.jsx'
import Cart from './Pages/Cart.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <LoadinngSpinner></LoadinngSpinner>,
    children: [
      {
    index: true,
    loader: ()=> fetch('https://openapi.programming-hero.com/api/plants'),
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
  },
  {
    path: "/Cart",
    Component: Cart
  },
  {
    path: "/plant-details/:id",
    loader: ({params}) =>
      fetch(`https://openapi.programming-hero.com/api/plant/${params.id}`),
    Component: PlantDetails
  }
    ]
  }
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
