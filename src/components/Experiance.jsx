import React from 'react'
import html from '../../public/html.jpg'
import css from '../../public/css.jpg'
// import react from '../../public/react.jpg'
import Js from '../../public/Js.jpg'
import py from '../../public/py.jpg'
import java from '../../public/java.jpg'
// import css from '../../public/css.jpg'
function Experiance() {
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"HTML"
    },{
      id:2,
      logo:css,
      name:"CSS"
    },{
      id:3,
      logo:Js,
      name:"JavaScript"
    },{
      id:4,
      logo:py,
      name:"Python"
    },{
      id:5,
      logo:java,
      name:"JAVA"
    }
  ]
  return (
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div> 
            <h1 className=' text-3xl font-bold mb-5'>Experiance</h1>
            <p className=' font semibold'>
                I've more than 6 Month of experiance in below technologies.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-28 my-10'>
             {
              cardItem.map(({id,logo,name})=>(
                <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-[150px] rounded-full ' alt="" />
                  <div>
                    <div className=' '>{name}</div>
                   
                  </div>
                 
                </div>
              ))
             }
            </div>
        </div>
    </div>
  )
}

export default Experiance

