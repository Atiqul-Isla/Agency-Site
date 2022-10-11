import React from 'react'
import {AiFillPhone, AiOutlineMail, } from 'react-icons/ai'
import emailjs from 'emailjs-com'
const Contact = () => {

    
    const sendEmail = (e) => {
        e.preventDefault();

        var name = document.getElementById('name')
        var email = document.getElementById('email')
        var message = document.getElementById('message')
        const success = document.getElementById('success')
        const danger = document.getElementById('danger')

        if(name.value === '' || email.value === '' || message.value === '' ) {
            danger.style.display = 'block'
            success.style.display = 'none'

            
        } else {
            setTimeout(() => {
                name.value = ''
                email.value = ''
                message.value = ''
            }, 2000)

            emailjs.sendForm('service_dthrqjn', 'template_9ps6hpm', e.target, 'yWiJgqqQ_6TeCQOD0')
            .then((result) => {
                console.log(result.text);
                console.alert(result.text)
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
            success.style.display = 'block'
            danger.style.display = 'none'

        }
      }; 
  return (
    <div className="bg-white w-full text-black py-16 px-4" id='contact'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row md:space-x-12 md:space-y-0 space-y-6 overflow-hidden'>
            <div className=''>
                <div>
                    <h1 className='font-bold lg:text-4xl md:text-3xl sm:txt-2xl text-xl tracking-wide'>Contact Us</h1>
                    <p className='pt-2 lg:text-3xl md:text-2xl sm:txt-xl text-xl tracking-wide'>Whether you're curious about us, want to schedule a meeting, have a problem you want to solve or simply just want to have a chat, do not hesitate to contact us!</p>
                </div>
                <div className='py-8'>
                    <div className='flex flex-row py-2'>
                        <AiFillPhone size={30}/>
                        <span className='font-bold pl-2'>+1(647) 787 1532</span>
                    </div>
                    <div className='flex flex-row py-2'>
                        <AiOutlineMail size={30}/>
                        <span className='font-bold pl-2'>agency@nivaly.ca</span>
                    </div>
                </div>
            </div>
            <div className='relative'>
                
                <div className='bg-black  text-white rounded-xl shadow-lg p-8 md:w-[600px]'>
                    <form action="" className='flex flex-col space-y-4' onSubmit={sendEmail}>
                        <div>
                            <label className='pb-2'>Name<strong className='text-[#FFa065]'>*</strong></label>
                            <input for="" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-[#00df9a] mt-2 py-1" placeholder='Enter your name...' name='from_name' id='name'/>
                        </div>
                        <div>
                            <label className='pb-2'>Email<strong className='text-[#FFa065]'>*</strong></label>
                            <input for="" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-[#00df9a] mt-2 py-1" placeholder='Enter your email...' name='email' id='email'/>
                        </div>
                        
                        <div>
                            <label className='pb-2'>Message</label>
                            <textarea rows="10" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-[#00df9a] mt-2" placeholder='Tell us your request...' name='message' style={{cursor: 'pointer'}} id='message'/>
                        </div>
                        <button  className='inline-block self-endbg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>
                            <input type='submit' value='Send Message' style={{cursor: 'pointer'}}></input>
                        </button>
                        <div className='message'>
                            <div className='text-[#00df9a] text-center hidden' id='success'>Your message has been sent succesfully!</div>
                            <div className='text-[#FFa065] text-center hidden' id='danger'>Fields can't be empty!</div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact