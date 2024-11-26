import { Outlet, useLoaderData } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from '../components'
import customFetch from '../utils/customFetch'
import { redirect, useNavigate, useNavigation } from 'react-router-dom'
import { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

// const HomeContext = createContext()

const HomeLayout = () => {
  // const logoutUser = async () => {
  //   navigate('/')
  //   await customFetch.get('/auth/logout')
  //   toast.success('Logging out...')
  // }
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeLayout
