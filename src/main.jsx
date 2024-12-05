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
import CheckoutComponent from './Components/Checkout page/CheckOut.jsx'
import CustomerDeliveryDetails from './Components/Details Page/DetailsPage.jsx'
import AccountDetails from './Components/Account Details/AccountDetails.jsx'
import PageNotFound from './Components/Page not found/PageNotFound.jsx'
import Dashboard from './Components/ADMIN/DashBoard.jsx'

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
      },
      {
        path: "customerdetails",
        element: <CustomerDeliveryDetails/>
      },
      {
        path: "checkout",
        element: <CheckoutComponent/>
      },
      {
        path: "accountdetails",
        element: <AccountDetails/>
      },
      {
        path: "pagenotfound",
        element: <PageNotFound/>
      },
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
  {
    path: 'dashboard',
    element: <Dashboard/>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>,
)
