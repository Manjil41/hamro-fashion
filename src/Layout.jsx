import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    {/* Clinet page header and footer */}
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
