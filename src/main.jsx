import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Men from './Components/Men Section/Men.jsx'
import Women from './Components/Women Section/Women.jsx'
import Combos from './Components/Combos/Combos.jsx'
import Signin from './Components/SIgnin-Signup/Signin.jsx'
import Signup from './Components/SIgnin-Signup/Signup.jsx'
import ProductPage from './Components/Product-Page/ProductPage.jsx'
import MyCart from './Components/Cart/MyCart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "men",
        element: <Men/>
      },
      {
        path: "women",
        element: <Women/>
      },
      {
        path: "combos",
        element: <Combos/>
      },
      {
        path: "product",
        element: <ProductPage/>
      },
      {
        path: "mycart",
        element: <MyCart/>
      }
    ]
  },
  {
    path: '/signin',
    element: <Signin/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
