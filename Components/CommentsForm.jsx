import React,{useState, useEffect, useRef} from 'react'
import { submitComment } from '../services'

const CommentsForm = ({slug}) => {

const [error, setError] = useState(false)
const [localStorage, setLocalStorage] = useState(null)
const [showSuccessMessage, setShowSuccessMessage] = useState(false)
const commentEl= useRef()
const nameEl= useRef()
const emailEl= useRef()
const storeDataEl= useRef()

useEffect(() => {
  nameEl.current.value = window.localStorage.getItem('name');
  emailEl.current.value = window.localStorage.getItem('email');
}, [])

const commentSubmit = () => {
  setError(false);

  const {value: comment} = commentEl.current;
  const {value: name} = nameEl.current;
  const {value: email} = emailEl.current;
  const {checked: storeData} = storeDataEl.current;

  if(!comment || !name || !email) {
    setError(true);
    return;
  }
  const commentOBJ ={
    name,email,comment,slug
  }
  if(storeData) {
    window.localStorage.setItem('name', name);
    window.localStorage.setItem('email', email);
  }else{
    window.localStorage.removeItem('name',name);
    window.localStorage.removeItem('email',email); 
  }

  submitComment(commentOBJ)
  .then((res)=> {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }
    ,3000)
  })

}

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl font-semibold border-b mb-4'>Leave a comment</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
          ref={commentEl} 
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Your comment'
          name='comment'
        />
      </div>

      <div className='grid grid-cols-1 gap-4 mb-4'>
        <input
        type='text' ref={nameEl}
        className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
        placeholder='Your name'
        name='name'
        />

      <div className='grid grid-cols-1 gap-4 mb-4'>
      <input
        type='mail' ref={emailEl}
        className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
        placeholder='Your Email'
        name='email'
        />
      </div>

      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input
          ref={storeDataEl}
          type='checkbox'
          id='storeData'
          name='storeData'
          value='true'

          />
          <label className='ml-2 text-gray-500 cursor-pointer' htmlFor='storeData'>Store my name and email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>Please fill all the fields</p>}
      <div className='mt-8'>
        <button type='button' onClick={commentSubmit} className='cursor-pointer transition duration-500 ease py-3 px-8 bg-pink-500 text-white rounded-full'>Submit</button>
      </div>
      {showSuccessMessage && <span className='text-xs text-green-500 float-right font-semibold mt-3'>Your comment has been submitted for review</span>}
    </div>
  )
}

export default CommentsForm