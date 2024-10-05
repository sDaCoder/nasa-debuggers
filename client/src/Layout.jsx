import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import React from 'react'

const Layout = () => {
  return (
    <>
     <Navbar /> 
     <Outlet />
    </>
  )
}

export default Layout
