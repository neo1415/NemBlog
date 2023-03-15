import React from 'react'
import moment from 'moment/moment'
import { Hero } from '../sections';

const PostDetail = ({post}) => {

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8 text-3md">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-3xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
        case 'video':
          return (
            <video
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
              autoPlay
              controls
              type='video/mp4'
              className="mx-auto"
            />
          );
      default:
        return modifiedText;
    }
  };

  return (
    <div className=' detail bg-white shadow-lg rounded-lg lg:p-4 pb-12 mb-8'>
        <div className='relative w-full overflow-hidden shadow-md mb-6'>
          <img
          src={post.featuredImage.url}
          alt={post.title}
          className='detail-img w-full object-cover h-full rounded-t-lg'
          />
          <div className='px-4 lg:px-52'>
            <div className='flex items-center mb-8 w-full'>
            <div className='flex items-center mt-0 mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <img
                alt={post.author.name}
                height='40px'
                width='40px'
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
            <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
            {post.content.raw.children.map((typeObj,index)=>{
              const children = typeObj.children.map((item,itemIndex)=>(getContentFragment(itemIndex,item.text,item)))
                return getContentFragment(index,children,typeObj,typeObj.type)
              })
            })
          </div>
        </div>
    </div>
  )
}

export default PostDetail