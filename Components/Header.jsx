import React,{useState, useEffect} from 'react'
import {getCategories} from '../Services'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../Constants'

const Header = ({slug}) => {


    const [categories, setCategories] = useState([])
    const [bg, setBg] = useState(false)

    useEffect(() => {
        getCategories()
        .then((newCategories)=> setCategories(newCategories))
    } , [])


  return (
    <div>
    {slug ? 
        <div className='container mx-0 px-10 mb-0 bg-transparent nav'>
        <div className='w-full inline-block py-1 von'>
            <div className=' md:float-left block'>
                <Link href='/'>
                  
                        <Image
                            src={assets.Logo}
                            alt='logo'
                            width='50'
                            height='50'
                            className='inline-block align-middle cursor-pointer'
                            />
                   
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map ((category)=>(
                    <Link href={`/category/${category.slug}`} key={category.slug}>
                        <span className='md:float-right mt-6 align-middle text-yellow-300 cursor-pointer ml-4 font-semibold '>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
           
        </div>
    </div> :
      <div className='container mx-0 px-10 mb-28 nav'>
      <div className='w-full inline-block  py-1'>
          <div className=' md:float-left block'>
              <Link href='/'>
                
                      <Image
                          src={assets.Logo}
                          alt='logo'
                          width='50'
                          height='50'
                          className='inline-block align-middle cursor-pointer'
                          />
                 
              </Link>
          </div>
          <div className='hidden md:float-left md:contents'>
              {categories.map ((category)=>(
                  <Link href={`/category/${category.slug}`} key={category.slug}>
                      <span className='md:float-right mt-6 align-middle text-yellow-300 cursor-pointer ml-4 font-semibold '>
                          {category.name}
                      </span>
                  </Link>
              ))}
          </div>
         
      </div>
  </div>
    }
   </div> 
  
  )
}

export default Header