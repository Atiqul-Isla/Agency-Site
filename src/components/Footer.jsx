import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NIVALY</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
    
        </div>
      </div>
      <div className='lg:col-span-1 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
          <Link to="services" spy={true} smooth={true} offset={-286} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a] text-sm'>Commerce</Link>
            <li className='py-2 text-sm'><Link to="clients" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a] text-sm'>Insights</Link></li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a] text-sm'>About</Link>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  )
}

export default Footer