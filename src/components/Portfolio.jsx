import React from 'react'
import java from '../../public/java.jpg'
import node from '../../public/node.jpg'
import react from '../../public/react.jpg'
import Js from '../../public/Js.jpg'
import py from '../../public/py.jpg'
import html from '../../public/html.jpg'
import css from '../../public/css.jpg'
function Portfolio() {
  const cardItem=[
    {
      id:1,
      logo:java,
      name:"Java"
    },{
      id:2,
      logo:node,
      name:"Node"
    },{
      id:3,
      logo:react,
      name:"React"
    },{
      id:4,
      logo:Js,
      name:"javaScript"
    },{
      id:5,
      logo:py,
      name:"Python"
    },{
      id:6,
      logo:html,
      name:"HTML"
    },{
      id:7,
      logo:css,
      name:"CSS"
    }
  ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <div> 
            <h1 className=' text-3xl font-bold mb-5'>PortFolio</h1>
            <span className='underline font semibold'>
                Feature Projects
            </span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-20 my-8'>
             {
              cardItem.map(({id,logo,name})=>(
                <div className='md:w-[300px] md:h-[300px]  border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                  <div>
                    <div className=' px-2 font-bold text-xl mt-2 mb-2'>{name}</div>
                    <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div className=' px-6 py-4 space-x-3 justify-around'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                    <button className=' bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                  </div>
                </div>
              ))
             }
            </div>
        </div>
    </div>
  )
}

export default Portfolio

