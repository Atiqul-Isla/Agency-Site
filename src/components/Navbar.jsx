import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const [click, setClick] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const handleClick = () => {
        setClick(!click)
    }
  return (
    <div>
        <div className='text-white flex justify-between max-w-[1540px] mx-auto items-center h-24 px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NIVALY</h1>
        <ul className='hidden md:flex pt-18 uppercase'>
            <li className='p-4'>
                <Link to="hero" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a]'>Home</Link>
            </li>
            <li className='p-4'>
                <Link to="about" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a]'>About</Link>
            </li>
            <li className='p-4'>
                <Link to="services" spy={true} smooth={true} offset={-286} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a]'>Services</Link>
            </li>
            <li className='p-4'>
                <Link to="clients" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a]'>Clients</Link>
            </li>
            <li className='p-4'>
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} style={{cursor: 'pointer'}} className='hover:text-[#00df9a]'>Contact</Link>
            </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose  className='fixed  text-[#00df9a] mr-64' size={20}/> :  <AiOutlineMenu size={20}/>}
        </div>
        <div className='block md:hidden'>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 z-10' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>NIVALY</h1>
                <ul className='pt-18 uppercase'>
                    <li className='p-4 border-b border-gray-700'>
                        <Link to="hero" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}}>Home</Link>
                    </li>
                    <li className='p-4 border-b border-gray-700'>
                        <Link to="about" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}}>About</Link>
                    </li>
                    <li className='p-4 border-b border-gray-700'>
                        <Link to="services" spy={true} smooth={true} offset={-286} duration={500} style={{cursor: 'pointer'}}>Services</Link>
                    </li>
                    <li className='p-4 border-b border-gray-700'>
                        <Link to="clients" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}}>Clients</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} style={{cursor: 'pointer'}}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default Navbar