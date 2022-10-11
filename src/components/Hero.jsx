import React, {useState, useRef, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {Link} from 'react-scroll'
import {TypeAnimation} from 'react-type-animation'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Parallax } from 'react-parallax'
import bgImg  from '../data/images/bgimg-01.jpg'
import logo  from '../data/images/logo_flower.png'
import { motion, useAnimation } from 'framer-motion'

const Hero = () => {
    const [nav, setNav] = useState(true)
    const [click, setClick] = useState(false)

    const {ref, inView} = useInView({
        threshold: 0.2
      })
    
      const animation = useAnimation()
    
      useEffect(() => {
        console.log("Use effect hook, inView=", inView)
        if(inView){
          animation.start({
            y: 0,
            opacity: 1,
            transition: {
              type: 'spring', duration: 2, bounce: 0.3,
            }
          })
        }
        if(!inView){
          animation.start({
            y: -250,
            opacity: 0,
            transition: {
              type: 'spring', duration: 2, bounce: 0.3,
            }
          })
        }
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [inView]);

    const handleNav = () => {
        setNav(!nav)
    }

    const items = document.querySelectorAll('.hero-items')
    const {ref: myRef, inView: isVisible, entry} = useInView();
    console.log(entry)
    return (
        <div>
        <Parallax strength={400} bgImage={bgImg} >
        <div className='hero-wrapper h-screen'>
            <div className='navbar-perspective' ref={ref}>
                <motion.div className='text-white flex justify-between max-w-[1540px] mx-auto items-center h-24 px-4' animate={animation}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'><img src=''></img>NIVALY</h1>
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
                </motion.div>
            </div>
   
            <div className='text-white' id='hero'>
                <div className='bg-black/70'>
                    <motion.div className='max-w-[800px] w-full mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center hero-items' animate={animation}>
                        {/* <h2 className='text-[#00df9a] font-bold p-1md:text-7md sm:text-6md text-4md'>START YOUR DIGITAL MARKETING JOURNEY</h2> */}
                        <h1 className='md:text-5xl sm:text-5xl text-4xl font-bold md:py-3'>Grow your business</h1>
                        <div className='flex justify-center items-center'>
                            <p className='md:text-4xl sm:text-4xl text-xl font-bold'>
                                Let us help you with
                            </p>
                            <TypeAnimation 
                            className='md:text-4xl sm:text-4xl text-lg font-bold text-[#00df9a] md:pl-3 sm:pl-2 pl-2 py-4' 
                            sequence={[
                                'Social Media', // Types 'One'
                                2000, // Waits 1s
                                'Copywriting', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                'Email Marketing',
                                2000, // Types 'Three' without deleting 'Two'
                                () => {
                                console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                }
                            ]} speed={50} repeat={Infinity} />
                        </div>
                        <Link to="services" spy={true} smooth={true} offset={-286} duration={500} style={{cursor: 'pointer'}} className='bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>Get Started</Link>
                    </motion.div>
                </div>
        
            </div>
        </div>
        </Parallax>
        </div>
    )
}

export default Hero