import React from 'react'
import kuakata from '../images/Blog/kuakata.jpg'
import sajek from '../images/Blog/sajek.jpg'
import tanguar from '../images/Blog/tanguar.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {
    
    return (
        <div className='mt-10 w-full flex flex-col items-center'>
            <h2 className='mb-3 text-2xl sm:text-3xl text-gray-700 font-bold font-merienda'>Travel Blog</h2>
            <div className='w-full flex flex-col sm:flex-row justify-center gap-x-10'>
                <Link to='/travel_blog/1' className="p-2 flex flex-col items-center group">
                    <div className='w-[340px] h-[180px] overflow-hidden rounded-md'>
                        <img src={sajek} alt="" className='w-[340px] object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125'/>
                    </div>
                    <h3 className='mt-2 w-[340px] text-lg group-hover:text-red-500 text-center font-semibold'>How to visit Sajek Valley in Rangamati</h3>
                </Link>
                <Link to='/travel_blog/2' className="p-2 flex flex-col items-center group">
                    <div className='w-[340px] h-[180px] overflow-hidden rounded-md'>
                        <img src={tanguar} alt="" className='w-[340px] object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125'/>
                    </div>
                    <h3 className='mt-2 w-[340px] text-lg group-hover:text-red-500 text-center font-semibold'>7 Tips for visiting Tanguar Haor</h3>
                </Link>
                <Link to='/travel_blog/3' className="hidden p-2 xl:flex flex-col items-center group">
                    <div className='w-[340px] h-[180px] overflow-hidden rounded-md'>
                        <img src={kuakata} alt="" className='w-[340px] object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125'/>
                    </div>
                    <h3 className='mt-2 w-[340px] text-lg group-hover:text-red-500 text-center font-semibold'>Kuakata Travel Guide: 10 Best things to do</h3>
                </Link>
            </div>
            <Link to='/travel_blog' className='mt-2 px-6 sm:px-10 py-[6px] sm:py-2 rounded-md bg-black hover:bg-slate-800 text-sm text-white font-md'>See More</Link>
        </div>
    )
}

export default Blog