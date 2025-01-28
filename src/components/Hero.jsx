import React from 'react'
import hero from '../images/components-img/hero.webp';

const Hero = () => {
  return (
    <div className='w-full h-52 sm:h-72 lg:h-[360px] flex justify-center relative'>
        <div className='w-full h-full relative rounded-xl overflow-hidden'>
            <img src={hero} alt="hero image" />
            <h1 className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-white text-xl sm:text-2xl lg:text-3xl font-poppins font-bold'>Exploring Made Easy</h1>
        </div>
    </div>
  )
}

export default Hero