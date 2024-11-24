import React from 'react'
import pic from '../../public/My.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNodejsLine } from "react-icons/ri";
import { ReactTyped } from "react-typed";
function Home() {
  return (
   <>
   <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
       <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                <span>Welcome in my feed</span>
                    <div className='flex space-x-1 text-3xl '> 
                     <h1>Hello,i'm a</h1>
                     {/* <span className='text-red-700 font-bold'>Developer</span> */}
                     <ReactTyped
                        className='text-red-700 font-bold'
                        strings={["Devloper","Programmer","Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                     />
                    </div><br />
                <p className='text-sm md:text-md text-justify'>" <b> Code is not just a tool, it's a way of thinking. Every bug you fix and every feature you build shapes the future of technology."</b> <br /><br />
                This reflects the idea that the role of a developer extends beyond just writing code; it’s about problem-solving, innovation, and contributing to the ever-evolving tech landscape. Developers are the architects of the digital world, and their work has the potential to impact the future in profound ways.</p>
                <br />
                {/* social midia */}
               <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                    <div className='space-y-3'>
                        <h1 className='font-bold '>Available on</h1>
                        <ul className='flex space-x-5'>
                        <li><a href="https://www.facebook.com/"target='_blank' >
                        <FaFacebookSquare className='text-2xl cursor-pointer'  /></a> </li>
                        <li> <a href="https://in.linkedin.com/"target='_blank'><FaLinkedinIn className='text-2xl cursor-pointer' /></a></li>
                        <li><a href="https://www.youtube.com/"target='_blank'><FaYoutube  className='text-2xl cursor-pointer'/></a></li>
                        <li><a href="https://web.telegram.org/"target='_blank'><FaTelegram  className='text-2xl cursor-pointer'/></a></li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                    <h1 className='font-bold'>Currently working on</h1>
                        <div className='flex space-x-5'>
                            <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                            <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                            <IoLogoReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                            <RiNodejsLine className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                        </div>
                    </div>
               </div>
            </div>
            <div className='md:w-1/2 md:ml-60 md:mt-20 mt-8 order-1'>
                <img src={pic} className='rounded-full md:w-[400px] md:h-[400px]' alt="" />
            </div>
       </div>
   </div>
   <hr />
   </>
  )
}

export default Home
