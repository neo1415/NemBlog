import React from 'react'
import {BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsEnvelopeFill, BsPhoneFill, BsPinMapFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
        <footer className="relative bg-blueGray-200 pt-8 pb-6 zIndex-5 footer">
  <div className="container mx-auto px-4 flex flex-col justify-center items-center">
    <div className="border-b border-white-800 flex flex-wrap text-left lg:text-left touch">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl font-semibold text-blueGray-700 text-center">Let's keep in touch!</h4>
        <h5 className="lg:text-lg mt-3 mb-4 text-blueGray-600 text-center text-sm ">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className="mt-6 lg:mb-0 mb-6 flex items-center justify-center mb-3">
          <button className="bg-yellow text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://twitter.com/neminsuranceplc'><BsTwitter /> </a></button><button className="bg-yellow text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='http://www.facebook.com/neminsplc'><BsFacebook /></a> </button><button className="bg-yellow text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://www.instagram.com/neminsuranceplc'><BsInstagram /></a> </button><button className="bg-yellow text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
            <a href='https://www.linkedin.com/company/nem-insurance-plc/'><BsLinkedin /></a>  
          </button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4 mt-4 item">
        <div className="flex  items-top mb-6 item">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 lg:text-lg text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 mt-3  block pb-2 text-sm" href="https://nem-insurance.com/site/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 mt-3  block pb-2 text-sm" href="https://www.nem-insurance.com">Website</a>
             </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 mt-3  block pb-2 text-sm" href="https://nem-insurance.com/site/cookie-policy">Cookie Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-blueGray-500 lg:text-lg font-semibold mb-2 text-sm">Contact Us</span>
            <ul className="list-unstyled md:flex justify-center items-center flex-col">
              <li>
                <p className="text-blueGray-600 hover:text-blueGray-800 mt-3 text-left block pb-2 text-sm flex"> <BsPinMapFill className='lg:flex text-3xl mt-2 mr-2 hidden' /> NEM Insurance Plc . 199, IkoroduRoad, Obanikoro, Lagos</p>
              </li>
              <li>
                <p className="text-blueGray-600 hover:text-blueGray-800 mt-3  block pb-2 text-sm flex"><BsEnvelopeFill className='lg:flex text-2xl mt-1 mr-2 hidden' /><a href='mailto:nem@nem-insurance.com' >nem@nem-insurance.com</a> </p>
              </li>
              <li>
                <p className="text-blueGray-600 hover:text-blueGray-800 mt-3  block pb-2 text-sm flex" ><BsPhoneFill className='lg:flex text-2xl mt-2 mr-2 hidden' /> 234-1-4489560<br></br> 234-1-4489570 </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm mt-4 text-blueGray-500 font-semibold mb-2 py-1">
          Copyright © <span id="get-current-year">2023</span><a href="https://www.nem-insurance.com" className="text-blueGray-500 hover:text-gray-800" target="_blank"> NEM Blog</a>
          <a href="https://www.nem-insurance.com" className="text-blueGray-500 hover:text-blueGray-800">NEM insurance</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer