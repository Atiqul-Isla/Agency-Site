import React from 'react'
import {AiFillPhone, AiOutlineMail, } from 'react-icons/ai'
import emailjs from 'emailjs-com'
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_EMAIL_TEMPLATE_KEY, e.target, process.env.REACT_APP_API_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }; 
  return (
    <div className="bg-white w-full text-black py-16 px-4" id='contact'>
        <div className='max-w-[1240px] mx-auto flex flex-col md:flex-row md:space-x-12 md:space-y-0 space-y-6 overflow-hidden'>
            <div className='flex flex-col justify-between'>
                <div>
                    <h1 className='font-bold lg:text-4xl md:text-3xl sm:txt-2xl text-xl tracking-wide'>Contact Us</h1>
                    <p className='pt-2 lg:text-4xl md:text-3xl sm:txt-2xl text-xl tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum recusandae facere veritatis distinctio esse magnam dolor in.</p>
                </div>
                <div className='py-2'>
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
                            <label className='pb-2'>Your name</label>
                            <input for="" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-[#00df9a] mt-2" placeholder='your name' name='from_name'/>
                        </div>
                        <div>
                            <label className='pb-2'>Email</label>
                            <input for="" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-[#00df9a] mt-2" placeholder='your email' name='email'/>
                        </div>
                        <div>
                            <label className='pb-2'>Message</label>
                            <textarea rows="4" className="text-black ring-1 ring-gray-300 w-full rounded-md px-4 outline-none focus:ring-2 focus:ring-[#00df9a] mt-2" placeholder='tell us your request' name='message' style={{cursor: 'pointer'}}/>
                        </div>
                        <button  className='inline-block self-endbg-transparent w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white border transition-colors duration-700 transform hover:bg-white hover:text-black focus:border-4 focus:border-black'>
                            <input type='submit' value='send message' style={{cursor: 'pointer'}}></input>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact