import React from 'react'
import bgBlog from "../../images/category-section/blog.webp"
import bgDest from "../../images/category-section/destination.webp"
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider';
import Strip from '../../components/Strip';

const Category = () => {
  return (
    <>
        <div className='mt-14 w-full flex flex-col sm:flex-row sm:justify-around gap-y-4'>
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
        <Slider />
    </>
  )
}

export default Category