import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider';
import Strip from '../../components/Strip';
import Blog from '../../components/Blog';
import bgBlog from "../../images/category-section/blog.webp"
import bgDest from "../../images/category-section/destination.webp"

const Home = () => {
    return (
        <div className='mx-auto mt-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <div className='w-full h-52 sm:h-72 lg:h-[360px] flex justify-center relative'>
                <div className='bg-hero-img bg-cover rounded-xl w-full h-full'>
                    <h1 className='w-full h-full text-white text-xl sm:text-2xl lg:text-3xl font-bold flex items-center justify-center'>Exploring Made Easy</h1>
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
            {/* <div className='mt-14 w-full flex flex-col sm:flex-row sm:justify-around gap-y-4'>
                <Link to='/travel_blog' className="group overflow-hidden w-full sm:w-[45%] sm:max-w-md 2xl:max-w-lg h-24 sm:h-48 2xl:h-56 rounded-lg flex flex-col items-center justify-center relative">
                    <img src={bgBlog} alt="image" className='group-hover:scale-125 duration-1000'/>
                    <p className='absolute text-xl 2xl:text-2xl text-white font-bold font-merienda'>Travel Blog</p>
                </Link>
                <Link to='/destinations' className="group overflow-hidden w-full sm:w-[45%] sm:max-w-md 2xl:max-w-lg h-24 sm:h-48 2xl:h-56 rounded-lg flex flex-col items-center justify-center relative">
                    <img src={bgDest} alt="image" className='group-hover:scale-125 duration-1000'/>
                    <p className='absolute text-xl 2xl:text-2xl text-white font-bold font-merienda'>Destinations</p>
                </Link>
            </div>
            <Strip />
            <Slider /> */}
            <div className='mt-10 w-full flex flex-col items-center'>
                <h2 className='mb-3 text-2xl sm:text-3xl text-gray-700 font-bold font-merienda'>Travel Blogs</h2>
                <Blog />
            </div>
        </div>
    )
}

export default Home