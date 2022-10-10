import React from 'react'
import Woman from '../data/images/woman-01.jpg'
import {Link} from 'react-scroll'
const Service = () => {
  return (
    <div className=' w-full bg-black text-white py-16 px-4 py-8' id='clients'>
        {/* <div className='bg-black rounded-lg'> */}
            <div className='max-w-[1540px] mx-auto grid md:grid-cols-2 py-24'>
                <img  className='w-[500px] mx-auto my-4' src={Woman} alt="/"></img>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a]'>COPYWRITING SERVICES</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Create a professionally worded business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro assumenda excepturi voluptas dolorum dolores adipisci et earum! Perspiciatis accusantium officiis voluptatibus repellat explicabo voluptas omnis ipsam illum? Amet, consectetur!</p>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className=' text-center bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>Setup Meeting</Link>

                </div>
            </div>
            <div className='max-w-[1540px] mx-auto grid md:grid-cols-2'>
                
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a]'>COPYWRITING SERVICES</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Create a professionally worded business</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis porro assumenda excepturi voluptas dolorum dolores adipisci et earum! Perspiciatis accusantium officiis voluptatibus repellat explicabo voluptas omnis ipsam illum? Amet, consectetur!</p>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className=' text-center bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>Setup Meeting</Link>

                </div>
                <img  className='w-[500px] mx-auto my-4' src={Woman} alt="/"></img>
            </div>
        {/* </div> */}
        
    </div>
  )
}

export default Service