import React from 'react'
import { useState, useEffect } from "react";
import hero from '../images/hero/4.webp';
import hero1 from '../images/hero/1.webp';
import hero2 from '../images/hero/2.webp';
import hero3 from '../images/hero/3.webp';


const Hero = () => {
    const [randomNumber, setRandomNumber] = useState(1);

    useEffect(() => {
      const generateRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 4) + 1);
      };

      const interval = setInterval(generateRandomNumber, 5000);

      return () => clearInterval(interval);
    }, []);

  return (
    <div className='w-full h-52 sm:h-72 lg:h-[360px] 2xl:h-[460px] flex justify-center relative'>
        <div className='w-full h-full relative rounded-xl overflow-hidden'>
            {randomNumber==1 && <img className='absolute top-[-25%]' src={hero} alt="hero image" />}
            {randomNumber==3 && <img className='absolute top-[-35%]' src={hero2} alt="hero image" />}
            {randomNumber==2 && <img className='absolute top-[-60%]' src={hero1} alt="hero image" />}
            {randomNumber==4 && <img className='absolute top-[-35%]' src={hero3} alt="hero image" />}
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-poppins font-bold"
            style={{
                fontSize: 'clamp(1rem, 2.5vw, 2.5rem)',
                lineHeight: '1.2',
            }}
            >
                Exploring Made Easy
            </h1>
        </div>
    </div>
  )
}

export default Hero