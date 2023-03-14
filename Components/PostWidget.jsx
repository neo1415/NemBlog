import React,{useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import {getRecentPosts, getSimilarPosts} from '../Services'

const PostWidget = ({categories, slug}) => {

    const [relatedPosts, setRelatedPosts] = useState([])

    useEffect(() => {
        if(slug){
            getSimilarPosts(categories, slug)
            .then((result)=> setRelatedPosts(result))
        }else{
            getRecentPosts()
            .then((result)=> setRelatedPosts(result))
        }
    }, [slug])

    console.log(relatedPosts)

  return (
    <div className='bg-white rounded-lg p-8 mt-20 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {slug ? 'Similar Posts' : 'Recent Posts'}
        </h3>
        {relatedPosts.map((post)=>(
            <div className='bg-white lg:flex shadow-lg rounded-lg lg:p-4 pb-12 mb-8' key={post.title}>
                <div className='w-100'>
                <img
                src={post.featuredImage.url}
                alt={post.title}
                className='w-full object-top  mb-4 h-20 object-cover rounded-t-lg'
                />
                </div>
                <div className='flex-grow ml-4'>
                    <p className='text-gray-500 font-xs'>
                        {moment(post.createdAt).format('MM DD, YYYY')}
                    </p>
                    <Link href={`/post/${post.slug}`} key={post.title}>
                        {post.title}
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default PostWidget