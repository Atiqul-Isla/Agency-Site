import React from 'react'
import Group from '../data/images/group-01.jpg'
import {Link} from 'react-scroll'
import { motion, useAnimation } from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
const About = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  })

  const animation = useAnimation()

  useEffect(() => {
    console.log("Use effect hook, inView=", inView)
    if(inView){
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3,
        }
      })
    }
    if(!inView){
      animation.start({
        x: 250,
        opacity: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3,
        }
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className=' bg-white text-white w-full bg-dark py-16 px-4 py-8' id='about' ref={ref}>
        <motion.div className=' bg-black max-w-[1540px] mx-auto grid md:grid-cols-2 py-24 rounded-lg px-4 text-center' animate={animation}>
            <img  className='w-[500px] mx-auto my-4' src={Group} alt="/"></img>
            <div className='flex flex-col justify-center md:mr-24 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Who we are</h1>
                <p className='md:text-2xl sm:text-xl text-1xl  py-2'>As an established agency, Nivaly works with it's team of contractors in Toronto to deliver results for our clients. We primarily work with medium to small-size businesses including e-commerce, home installation, home installation, beauty/fashion, etc.</p>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>Contact Us</Link>
            </div>
        </motion.div>
    </div>
  )
}

export default About