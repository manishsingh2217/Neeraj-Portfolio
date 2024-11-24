import React from 'react'
import { FaFacebook,FaTelegram,FaLinkedin,FaInstagram, } from 'react-icons/fa'


function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className=' flex flex-col items-center justify-center'>
          <div className='flex space-x-4'>
            <FaFacebook size={24}/>
            <FaInstagram size={24}/>
            <FaLinkedin size={24}/>
            <FaTelegram size={24}/>
          </div>
          <div className='mt-8 border-t border-gray-700 pt-8  flax-col items-center '>
            <p className='text-sm'>
              &copy;2024 Your Company. All rights reserved.
            </p>
            <p className='text-sm'> and Supportive Partner &#9829; Manish Singh</p>
          </div>
        </div>
      </div>
    </footer>
    </>
   
  )
}

export default Footer
