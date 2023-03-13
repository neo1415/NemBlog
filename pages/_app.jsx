import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import React,{useEffect, useState} from 'react'
import { Layout } from '../Components'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Script id='tidio chatbot' src="//code.tidio.co/zh11bdxycruhcii45swxg9gs8j1ij404.js" async />
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
