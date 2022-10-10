import React, {useState, useRef, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import {Link} from 'react-scroll'
import {TypeAnimation} from 'react-type-animation'
const Hero = () => {

    const items = document.querySelectorAll('.hero-items')
    const {ref: myRef, inView: isVisible, entry} = useInView();
    console.log(entry)
    return (
        <div className='text-white custom-img' id='hero'>
            <div className='bg-black/70'>
                <div className='max-w-[800px] w-full mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center hero-items' ref={myRef}>
                    <h2 className='text-[#00df9a] font-bold p-1md:text-7md sm:text-6md text-4md'>START YOUR DIGITAL MARKETING JOURNEY</h2>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>Grow your business</h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                            Rapid delivery for
                        </p>
                        <TypeAnimation 
                        className='md:text-5xl sm:text-4xl text-xl font-bold text-[#00df9a] md:pl-3 sm:pl-2 pl-2 py-4' 
                        sequence={[
                            'One', // Types 'One'
                            1000, // Waits 1s
                            'Two', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'Three', // Types 'Three' without deleting 'Two'
                            () => {
                              console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                          ]} speed={50} repeat={Infinity} />
                    </div>
                    <Link to="services" spy={true} smooth={true} offset={0} duration={500} style={{cursor: 'pointer'}} className='bg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>Get Started</Link>
                </div>
            </div>
        
        </div>
    )
}

export default Hero