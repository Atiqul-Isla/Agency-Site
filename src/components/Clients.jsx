import React from 'react'
import Barber from '../data/images/barber-01.png'
import Glass from '../data/images/glass-01.png'
import bgImg from '../data/images/hero-01.jpg'
import {Link} from 'react-scroll'
import { Parallax } from 'react-parallax'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
const Service = () => {
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
        overflow: 'hidden',
        transition: {
          type: 'spring', duration: 2, bounce: 0.3,
        }
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <div ref={ref}>
    <Parallax strength={600} bgImage={bgImg} bgClassName='custom-img'>
    <motion.div className=' w-full bg- text-black py-16 px-4 py-8 pb-32' id='clients' animate={animation}>
            <h1 className='text-center text-5xl font-bold pt-8 text-white md:ml-16 pb-16'>Our Clients</h1>
            <div className='max-w-[700px] mx-auto grid md:grid-cols-2 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-110 duration-300 bg-white rounded-xl '>
                    <img src={Glass} alt=''className='h-[200px]'></img>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-log hover:scale-110 duration-300 bg-white rounded-xl '>
                    <img src={Barber} alt='' className='h-[200px] '></img>
                </div>
            </div>
    </motion.div>
    </Parallax>
    </div>
    
  )
}

export default Service