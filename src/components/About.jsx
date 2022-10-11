import React from 'react'
import Group from '../data/images/group-01.jpg'
import {Link} from 'react-scroll'

const About = () => {

 
  return (
    <div className=' bg-white text-white w-full bg-dark py-16 px-4 py-8' id='about'>
        <div className=' bg-black max-w-[1540px] mx-auto grid md:grid-cols-2 py-24 rounded-lg px-4 text-center'>
            <img  className='w-[500px] mx-auto my-4' src={Group} alt="/"></img>
            <div className='flex flex-col justify-center md:mr-24 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Who we are</h1>
                <p>As an established agency, Nivaly works wih its team of contractors in Toronto to deliver results for our clients, We primarily work with medium to small-size businesses including e-commerce, home installation, home installation, beauty/fashion, etc.</p>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default About