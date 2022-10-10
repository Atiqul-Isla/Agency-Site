import React from 'react'
import Woman from '../data/images/woman-01.jpg'
import {TbWriting} from 'react-icons/tb'
import {FaRegChartBar} from 'react-icons/fa'
import {SiMinutemailer} from 'react-icons/si'
import {Link} from 'react-scroll'
const Services = () => {
  return (
    <div className='w-full pt-8 pb-32 px-4 bg-white text-black' id='services'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-110 duration-300'>
                <TbWriting size={80} className='text-[#00df9a] mx-auto mt-[3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Various Industries</h2>
                <p className='text-center text-4xl font-bold'>Copy Writing</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Strong online presence is the key to driving traffic</p>
                    <p className='py-2 border-b mx-8'>Maximize your persuasion potential</p>
                    <p className='py-2 border-b mx-8'>Convey your ideas clearly</p>
                </div>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className=' text-center bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border transition-colors duration-700 transform hover:bg-black hover:text-[#00df9a] focus:border-4 focus:border-black'>Get Started</Link>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-110 duration-300'>
                <FaRegChartBar size={80} className='text-[#00df9a] mx-auto mt-[3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Social Media</h2>
                <p className='text-center text-4xl font-bold'>Digital Marketing</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Strengthen online presence to drive more traffic</p>
                    <p className='py-2 border-b mx-8'>Improve how you spend on ads</p>
                    <p className='py-2 border-b mx-8'>Increase your R.O.A.S</p>
                </div>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className=' text-center bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border transition-colors duration-700 transform hover:bg-black hover:text-[#00df9a] focus:border-4 focus:border-black'>Get Started</Link>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-110 duration-300'>
                <SiMinutemailer size={80} className='text-[#00df9a] mx-auto mt-[3rem] bg-white'/>
                <h2 className='text-2xl font-bold text-center py-8'>Various Industry</h2>
                <p className='text-center text-4xl font-bold'>Emailing</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Increase recurring sales opportunities</p>
                    <p className='py-2 border-b mx-8'>Design the perfect email marketing campaign</p>
                    <p className='py-2 border-b mx-8'>Keep customers engaged</p>
                </div>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className=' text-center bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black border transition-colors duration-700 transform hover:bg-black hover:text-[#00df9a] focus:border-4 focus:border-black'>Get Started</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Services