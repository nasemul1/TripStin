import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import hero from '../images/components-img/hero.webp';

const Hero = () => {
  return (
    <div className='w-full h-52 sm:h-72 lg:h-[360px] flex justify-center relative'>
        <div className='w-full h-full relative rounded-xl overflow-hidden'>
            <img src={hero} alt="hero image" />
            <h1 className='absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-white text-xl sm:text-2xl lg:text-3xl font-poppins font-bold'>Exploring Made Easy</h1>
        </div>
        {/* <div className='mx-auto w-[70%] sm:w-[80%] md:w-[90%] absolute top-[80%] z-40 rounded-lg overflow-hidden'>
            <Splide 
                aria-label="My Favorite Images"
                options={{
                    type   : 'loop',
                    drag   : 'free',
                    focus  : 'center',
                    fixedWidth : '12rem',
                    height: '8rem',
                    pagination: false,
                    arrows: false,
                    gap: '3em',
                    perPage: 4,
                }}
            >
                <SplideSlide>
                    <Link to='/destinations' className='h-[7em] sm:h-[8rem] rounded-xl border-[8px] border-white bg-chittagong bg-cover flex justify-center items-end'>
                        <p className='pb-2 text-sm text-white font-bold'>Chittagong</p>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to='/destinations' className='h-[7em] sm:h-[8rem] rounded-xl border-[8px] border-white bg-sylhet bg-cover flex justify-center items-end'>
                        <p className='pb-2 text-sm text-white font-bold'>sylhet</p>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to='/destinations' className='h-[7em] sm:h-[8rem] rounded-xl border-[8px] border-white bg-khulna bg-cover flex justify-center items-end'>
                        <p className='pb-2 text-sm text-white font-bold'>Khulna</p>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to='/destinations' className='h-[7em] sm:h-[8rem] rounded-xl border-[8px] border-white bg-sunamganj bg-cover bg-center flex justify-center items-end'>
                        <p className='pb-2 text-sm text-white font-bold'>Sunamganj</p>
                    </Link>
                </SplideSlide>
            </Splide>
        </div> */}
    </div>
  )
}

export default Hero