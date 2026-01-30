import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
     <Header/>
     <main className='pt-[120px]'>
        <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default Layout