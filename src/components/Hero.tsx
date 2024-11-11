import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (

    <div 
    id="hero"
    className='hero-container'
    >
      
      <Navbar/>
      <div className='hero-content'>
        <div className='hidden lg:block'></div>

        <div className='hero-text'>
            <div className='hero-main'>
                <p data-aos="zoom-in-down">Hello! It's me </p>
                <p data-aos="zoom-in-down">Mohib Ali</p>
                <p data-aos="zoom-in-down">Khan</p>
                
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Hero