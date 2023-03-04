import React,{useState, useEffect} from 'react'
import moment from 'moment'
import parser from 'html-react-parser'
import { getComments } from '../Services'
import {comment} from 'postcss'

const Comments = ({slug}) => {

  const [comments, setComments] = useState([])

  useEffect(() => {
      getComments(slug)
      .then((results) => {
        setComments(results)
      })
  }, [])

  return (
   <>
    {comment.length > 0 && (
      <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
        <h3 className='text-xl font-semibold border-b mb-8'>
          {comments.length}
          {" "}
          comments
        </h3>
        {comments.map((comment) => (
          <div key={comment.createdAt} className='mb-4 border-b border-gray-100 pb-4'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span>
                {" "}
                on
                {" "}
                {moment(comment.createdAt).format('MMMM Do YYYY')}
              </p>
              <p className='whitespace-pre-line text-gray-600 w-full'>
                {parser(comment.comment)}
              </p>
            </div>
            ))}
      </div>
    )}
   </>
  )
}

export default Comments