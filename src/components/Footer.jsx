import React from 'react'
import logoW from '../assets/logo_w.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-10 p-10 w-full bg-black grid grid-cols-12 text-white'>
        <div className='col-span-7 sm:col-span-5 text-[12px] sm:text-[16px]'>
            <img src={logoW} alt="logo" className='w-28'/>
            <p className='mt-1 text-[10px] font-medium'>Exploring Made Easy</p>
            <div className='mt-4'>
                <p>Contact Us:</p>
                <p className='italic'>Email: contact@tripstins.com</p>
                <p className='italic'>Phone: +123456789</p>
            </div>
            <div className='mt-4'>
                <p>Address:</p>
                <p className='italic'>18207 Gibson Valleys,</p>
                <p className='italic'>Port Adalberto</p>
                <p className='italic'>NV 80178</p>
            </div>
        </div>
        <div className='col-start-8 sm:col-start-7 col-span-5 sm:col-span-3 flex flex-col gap-y-1 text-[12px] sm:text-[16px]'>
            <p className=' font-semibold'>Top Destinations:</p>
            <Link to='/destinations/1'>Cox's Bazar</Link>
            <Link to='/destinations/2'>Chittagong</Link>
            <Link to='/destinations/3'>Saint Martin</Link>
            <Link to='/destinations/4'>Bandarban</Link>
            <Link to='/destinations/5'>Sylhet</Link>
            <Link to='/destinations/6'>Rangamati</Link>
            <Link to='/destinations/7'>Tanguar Haor</Link>
        </div>
        <div className='col-start-8 sm:col-start-10 col-span-5 sm:col-span-3 flex flex-col gap-y-1 text-[12px] sm:text-[16px]'>
            <p className=' font-semibold'>About:</p>
            <Link to='/about'>TripStin</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/polices'>Privacy & Policy</Link>
        </div>
    </footer>
  )
}

export default Footer