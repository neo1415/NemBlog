import React from 'react'
import Image from 'next/image'	
import Link from 'next/link'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Hero = ({post}) => {
  return (
    <div className="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left bg-white hero">

      <div className="container flex xl:px-32">

        <div className="grid grid-cols-2 gap-12 lg:flex items-center md:flex-column flexer">
        <div className="mt-20 lg:mb-0 left-0 mb-6 grid fixed zIndex-200">
          <button className=" mt-3 flex align-items justify-content bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://twitter.com/neminsuranceplc'><BsTwitter /> </a></button><button className="mt-3 flex align-items justify-content bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='http://www.facebook.com/neminsplc'><BsFacebook /></a> </button><button className="mt-3 flex align-items justify-content bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://www.instagram.com/neminsuranceplc'><BsInstagram /></a> </button><button className="mt-3 flex align-items justify-content bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://www.linkedin.com/company/nem-insurance-plc/'><BsLinkedin /></a>  
          </button>
        </div>
          <div className="mt-12 lg:mt-0">
            <h1 className="text-5xl mb-5 md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-white">{post?.title}</h1>
            <Link href={`/post/${post.slug}`} key={post.title} className="inline-block mb-4 px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out bt2" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Read More</Link>
          </div>
          <div className="mb-12 lg:mb-0">
            <Image
              unoptimized
              src={post.featuredImage.url}
              className="w-full rounded-lg shadow-lg h-image"
              alt={post.title}
              width='500'
              height='500' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero