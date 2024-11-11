import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
        <div className='grid md:grid-cols-2 '>
            <div className='contact-space'>
                <h2 className='contact-heading' data-aos='fade-right'>Get in Touch</h2>

                <p className='contact-text 'data-aos='fade-right'>
                    Drop me a line,give me a call,or send a message

                </p>

                <div className='contact-flex'data-aos="fade-right">
                    <AiOutlineMail size={30}/>khanmohibali1@gmail.com

                </div>

                <div className='contact-flex'data-aos="fade-right">
                    <BsTelephone size={30}/>03173808380

                </div>
            </div>

        <div className='contact-space'>
            <div className='form' data-aos="fade-left">
            <label htmlFor="name">Name</label>
            <input type="text" 
            className='input-field'
            id='name'/>
        </div>

            <div className='form' data-aos="fade-left">
            <label htmlFor="email">Email</label>
            <input type="text" 
            className='input-field' id='email'/>
        </div>

        <div className='form' data-aos="fade-left">
            <label htmlFor="msg">Message</label>
            <textarea  className='textarea-field' id='msg' rows={8}></textarea>
        </div>
        <button className='button'data-aos='zoom-in-down'>Submit</button>
        </div>  
      </div>
    </div>

  );
};

export default Contact