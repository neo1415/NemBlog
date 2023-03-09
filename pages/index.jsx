import Head from 'next/head'
import { PostCard, Categories, PostWidget} from '../Components'
import { FeaturedPosts, Hero } from '../sections'
import {getPosts} from '../Services'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Home ({posts}) {


  return (
    <div className="container mx-0 mb-8 con">
        <Head>
          <title>NEM BLog</title>
          <link rel="icon" href="/NEM.jpg" />
        </Head>
       <Hero />
       {/* <div className="mt-20 lg:mb-0 left-0 mb-6 grid fixed zIndex-200">
          <button className=" mt-3 flex align-items justify-content bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://twitter.com/neminsuranceplc'><BsTwitter /> </a></button><button className="mt-3 flex align-items justify-content bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='http://www.facebook.com/neminsplc'><BsFacebook /></a> </button><button className="mt-3 flex align-items justify-content bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://www.instagram.com/neminsuranceplc'><BsInstagram /></a> </button><button className="mt-3 flex align-items justify-content bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://www.linkedin.com/company/nem-insurance-plc/'><BsLinkedin /></a>  
          </button>
        </div> */}
      <div className="container von mx-auto px-1 mb-8">

        <div className="-mt-12">
        <FeaturedPosts />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post) => (
              <PostCard key={post.title} post={post.node}  />
            ))}
          </div>
          <div className='lg:col-span-4 col-span-1'>
              <span className='lg:sticky relative top-8'>
                <PostWidget />
                <Categories />
              </span>
          </div>
        </div>


      </div>
      
    </div>
  )
}

export async function getStaticProps () {
  const posts = (await getPosts()) || []
  return {
    props: {
      posts
    }
  }
}