import Head from 'next/head'
import { PostCard, Categories, PostWidget} from '../Components'
import { FeaturedPosts, Hero } from '../sections'
import {getPosts} from '../services'


export default function Home ({posts}) {


  return (
    <div className="container mx-0 mb-8 con">
        <Head>
          <title>NEM BLog</title>
          <link rel="icon" href="/NEM.jpg" />
        </Head>
       <Hero />
      <div className="container mx-auto px-10 mb-8">

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