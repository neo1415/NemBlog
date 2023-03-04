import React from 'react'
import Footer from '../sections/Footer'
import {Header} from './'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer />
    </>
  )
}

export default Layout