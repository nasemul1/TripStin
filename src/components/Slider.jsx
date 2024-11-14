import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import cox from '../images/destination/cox.jpg'
import jaflong from "../images/destination/jaflong.jpg"
import martin from "../images/destination/martin.jpg"
import sundarban from "../images/destination/sundarban.jpg"
import sajek from "../images/destination/bandarban.webp"

const Slider = () => {
  return (
    <div className='mt-12 w-full flex flex-col items-center'>
        <h2 className='mb-4 text-2xl sm:text-3xl text-gray-700 font-bold font-merienda'>Destinations</h2>
        <div className='w-full'>
            <Splide 
                aria-label="My Favorite Images"
                options={{
                    drag   : 'free',
                    focus  : 'center',
                    fixedWidth : '14rem',
                    height: '8rem',
                    pagination: false,
                    arrows: true,
                    gap: '1.2em',
                    perPage: 10
                }}
            >
                <SplideSlide>
                    <Link to='/destinations' className='h-full rounded overflow-hidden flex flex-col items-center relative group'>
                        <img src={cox} alt="cox barar" className='w-full group-hover:scale-125 duration-1000'/>
                        <p className='text-sm text-white font-bold absolute top-[80%]'>Cox's Bazar</p>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to='/destinations' className='h-full rounded overflow-hidden flex flex-col items-center relative group'>
                        <img src={jaflong} alt="cox barar" className='w-full group-hover:scale-125 duration-1000'/>
                        <p className='text-sm text-white font-bold absolute top-[80%]'>Jaflong</p>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to='/destinations' className='h-full rounded overflow-hidden flex flex-col items-center relative group'>
                        <img src={martin} alt="cox barar" className='w-full group-hover:scale-125 duration-1000'/>
                        <p className='text-sm text-white font-bold absolute top-[80%]'>Saint Martin</p>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to='/destinations' className='h-full rounded overflow-hidden flex flex-col items-center relative group'>
                        <img src={sundarban} alt="cox barar" className='w-full group-hover:scale-125 duration-1000'/>
                        <p className='text-sm text-white font-bold absolute top-[80%]'>Sundarban</p>
                    </Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to='/destinations' className='h-full rounded overflow-hidden flex flex-col items-center relative group'>
                        <img src={sajek} alt="cox barar" className='w-full group-hover:scale-125 duration-1000'/>
                        <p className='text-sm text-white font-bold absolute top-[80%]'>Sajek</p>
                    </Link>
                </SplideSlide>
            </Splide>
        </div>
        <Link to='/destinations' className='mt-6 px-6 sm:px-10 py-[6px] sm:py-2 rounded-md bg-black hover:bg-slate-800 text-sm text-white font-md'>See More</Link>
    </div>
  )
}

export default Slider