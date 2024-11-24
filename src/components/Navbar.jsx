import React, { useState } from 'react'
import pic from '../../public/My.jpg'
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import {Link,} from "react-scroll";

function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItems=[{
        id:1,text:"Home"
    },{
        id:2,text:"About"
    },{
        id:3,text:"Portfolio"
    },{
        id:4,text:"Experiance"
    },{
        id:5,text:"Contect"
    }]
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20  h-16 shadow-md fixed top-0 left-0 reight-0 z-50 bg-white'>
    <div className='flex justify-between items-center h-16'>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>Nee<samp className='text-green-700 text-2xl'>raj</samp>
            <p className='text-sm'>web developer</p></h1>
        </div>
        {/* desktop navbar */}
        <div>
            <ul className=' hidden md:flex space-x-9'>
               {
                navItems.map(({id,text})=>(
                    <li className='hover:scale-105 duretion-200 cursor-pointer' key={id}>
                     <Link to={text}
                     smooth={true}
                     duration={500}
                     offset={-70}
                     activeClass="active"
                     >{text}
                     </Link>   
                    </li>
                ))
               }
            </ul>
            <div onClick={()=>setMenu(!menu)} className='md:hidden'>{menu?<RxCross2 size={24} />: < LuMenu size={24}/>}</div>       
        </div>
    </div>
    {/* mobile navbar */}
    {
    menu&&( 
    <div className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
        {
            navItems.map(({id,text})=>(
                 <li className='hover:scale-105 duretion-200 font-semibold cursor-pointer' key={id}> 
                 <Link onClick={()=>setMenu(!menu)}
                 to={text}
                 smooth={true}
                 duration={500}
                 offset={-70}
                 activeClass="active"
                 >{text}
                 </Link> </li>
            ))
        }
        </ul>
    </div>)
    }

   </div>
   </>
  )
}

export default Navbar
