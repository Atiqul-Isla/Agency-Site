import React from 'react'
import Barber from '../data/images/barber-01.png'
import Glass from '../data/images/glass-01.png'
import {Link} from 'react-scroll'
const Service = () => {
  return (
    <div className=' w-full bg- text-black py-16 px-4 py-8 pb-32' id='clients'>
            <h1 className='text-center text-5xl font-bold pt-8 text-white md:ml-16 pb-16'>Our Clients</h1>
            <div className='max-w-[850px] mx-auto grid md:grid-cols-2 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-110 duration-300 bg-white rounded-xl '>
                    {/* <TbWriting size={80} className='text-[#00df9a] mx-auto mt-[3rem] bg-white'/> */}
                    <img src={Glass} alt=''className='h-[275px]'></img>
                    <h2 className='text-2xl font-bold text-center py-8'>Various Industries</h2>
                    <p className='text-center text-4xl font-bold'>Northern Glass</p>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className=' text-center bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border transition-colors duration-700 transform hover:bg-black hover:text-[#00df9a] focus:border-4 focus:border-black'>Get Started</Link>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-110 duration-300 bg-white rounded-xl '>
                    {/* <FaRegChartBar size={80} className='text-[#00df9a] mx-auto mt-[3rem] bg-white'/> */}
                    <img src={Barber} alt='' className='h-[275px]'></img>
                    <h2 className='text-2xl font-bold text-center py-8'>Email Marketing</h2>
                    <p className='text-center text-4xl font-bold'>Maple Barber</p>
                    <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className=' text-center bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border transition-colors duration-700 transform hover:bg-black hover:text-[#00df9a] focus:border-4 focus:border-black'>Get Started</Link>
                </div>
            </div>
    </div>
  )
}

export default Service