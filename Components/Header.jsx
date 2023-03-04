import React,{useState, useEffect} from 'react'
import {getCategories} from '../services'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../Constants'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Header = () => {


    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((newCategories)=> setCategories(newCategories))
    } , [])

  return (
    <div className='container mx-0 px-10 mb-0 bg-white nav'>
        <div className='border-b w-full inline-block border-red-800 py-8'>
            <div className='md:float-left block'>
                <Link href='/'>
                  
                        <Image
                            src={assets.Logo}
                            alt='logo'
                            width='70'
                            height='70'
                            className='inline-block align-middle cursor-pointer'
                            />
                   
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map ((category)=>(
                    <Link href={`/category/${category.slug}`} key={category.slug}>
                        <span className='md:float-right mt-2 align-middle text-red-800 cursor-pointer ml-4 font-semibold '>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
           
        </div>
    </div>
  )
}

export default Header