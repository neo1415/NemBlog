import React from 'react'
import moment from 'moment/moment'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { grpahCMSImageLoader } from './../util';

const PostCard = ({post}) => {
  return (
    <motion.div
    whileInView={{y: [100, 0], opacity: [0, 1]}}
    transition= {{ duration:1.2, ease:'easeOut' }} 
    className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
            <img src={post.featuredImage.url}
                 className='absolute w-full h-80 object-cover object-top shadow-lg rounded-t-lg lg:rounded-lg' 
                alt={post.title}/>
        </div>
        <h1 className='transition duration-700 text-center mb-9 cursor-pointer
        hover:text-red-600 text-3xl font-semibold'>
            <Link href={`/post/${post.slug}`}>
                {post.title}
            </Link>
        </h1>
        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
        {post.excerpt}
    </p>
        <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <img
                alt={post.author.name}
                height='40px'
                width='40px'
                loader={grpahCMSImageLoader}
                className='align-middle rounded-full'
                src={post.author.photo.url} />
                <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
            </div>
          
       
        <div className='font-medium text-gray-700'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className='align-middle'>{moment(post.createdAt).format('MM DD, YYYY')}</span>
        </div>
    </div>



    <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
            <span className='transition duration-500 ease transform rounded-lg radius-10 cursor-pointer hover:-translate-y-1 inline-block bg-red-700 text-white px-8 py-3 cursor-pointer'> Continue Reading </span>
        </Link>
    </div>

    </motion.div>
  )
}

export default PostCard
