import React from "react"
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl' data-aos="zoom-out-up">Reach out to connect</h2>
                <p className='text-black-500 text-[18px] pt-2' data-aos="zoom-out-up">For your queries drop a call or message or fill out queries by submitting form, and we’ll get back to you promptly.
                </p>  
                
                <div className='flex gap-3 items-center' data-aos="zoom-out-up">
                    <AiOutlineMail size={25}/> khanakrani107@gmail.com
                </div>
                <div className='flex gap-3 items-center' data-aos="zoom-out-up">
                <BsFillTelephoneInboundFill size={25}/> (021) 1234-2233
                </div>
            </div>
            <div className="space-y-8">
                <div className="flex flex-col gap-1" data-aos="zoom-out-up">
                    <label htmlFor="name">Name</label>
                    <input type="text"  
                    className="h-[40px] bg-transparent border border-green"
                    id="name"/>
                </div>
                <div className="flex flex-col gap-1" data-aos="zoom-out-up">
                    <label htmlFor="email">Email</label>
                    <input type="text"  
                    className="h-[40px] bg-transparent border border-green"
                    id="email"/>
                </div>
                <div className="flex flex-col gap-1" data-aos="zoom-out-up">
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className="bg-transparent border border-green"
                    id="msg" rows={8}>
                        </textarea>
                </div>
                <button 
                  className="bg-accent text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-200"
                  type="button"
                  aria-label="Button description" data-aos="zoom-out-up">
                   Send
                   </button>

            </div>
        </div>
    </div>
  )
}

export default Contact
