import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import logomini from '../../assets/logo-mini.png'

// icons
import { Box, User, MessageSquare, Calendar, Users, PanelsTopLeft} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState();
    const handleLinkClick = (index) => {
        setActiveLink(index);
    }
  return (
    <div className='w-16 md:w-56 fixed top-0 left-0 z-10 h-screen border-r pt-8 px-4 bg-white shadow-md'>
        <div className='mb-8 md:px-5'>
            <img src={logo} alt="logo" className='w-28 hidden md:flex' />
            <img src={logomini} alt="logo" className='w-8 flex md:hidden' />
        </div>

        <ul className='mt-6 space-y-6'>
            <li 
            className={`py-2 font-medium rounded-md px-5 ${activeLink === 'dash' ? "bg-[#072F54] text-white": "text-gray-500 hover:bg-gray-100 hover:text-[#072F54]"}`}
            >
                <Link 
                to='/admin' 
                className='flex items-center justify-center md:justify-start md:space-x-5'
                onClick={() => handleLinkClick('dash')}
                >
                    <span><Box /></span>
                    <span className='text-sm hidden md:flex'>Dashboard</span>
                </Link>
            </li>
            <li 
            className={`py-2 font-medium rounded-md px-5 ${activeLink === 'memb' ? "bg-[#072F54] text-white": "text-gray-500 hover:bg-gray-100 hover:text-[#072F54]"}`}
            >
                <Link 
                to='/admin/members' 
                className='flex items-center justify-center md:justify-start md:space-x-5'
                onClick={() => handleLinkClick('memb')}
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </span>
                    <span className='text-sm hidden md:flex'>Pending Blogs</span>
                </Link>
            </li>
            <li 
            className={`py-2 font-medium rounded-md px-5 ${activeLink === 'mess' ? "bg-[#072F54] text-white": "text-gray-500 hover:bg-gray-100 hover:text-[#072F54]"}`}
            >
                <Link 
                to='/admin/messages' 
                className='flex items-center justify-center md:justify-start md:space-x-5'
                onClick={() => handleLinkClick('mess')}
                >
                    <span><MessageSquare /></span>
                    <span className='text-sm hidden md:flex'>Messages</span>
                </Link>
            </li>
            <li 
            className={`py-2 font-medium rounded-md px-5 ${activeLink === 'proj' ? "bg-[#072F54] text-white": "text-gray-500 hover:bg-gray-100 hover:text-[#072F54]"}`}
            >
                <Link 
                to='/admin/projects' 
                className='flex items-center justify-center md:justify-start md:space-x-5'
                onClick={() => handleLinkClick('proj')}
                >
                    <span><PanelsTopLeft /></span>
                    <span className='text-sm hidden md:flex'>Projects</span>
                </Link>
            </li>
            <li 
            className={`py-2 font-medium rounded-md px-5 ${activeLink === 'cli' ? "bg-[#072F54] text-white": "text-gray-500 hover:bg-gray-100 hover:text-[#072F54]"}`}
            >
                <Link 
                to='/admin/clients' 
                className='flex items-center justify-center md:justify-start md:space-x-5'
                onClick={() => handleLinkClick('cli')}
                >
                    <span><Users /></span>
                    <span className='text-sm hidden md:flex'>Clients</span>
                </Link>
            </li>
            <li 
            className={`py-2 font-medium rounded-md px-5 ${activeLink === 'work' ? "bg-[#072F54] text-white": "text-gray-500 hover:bg-gray-100 hover:text-[#072F54]"}`}
            >
                <Link 
                to='/admin/work' 
                className='flex items-center justify-center md:justify-start md:space-x-5'
                onClick={() => handleLinkClick('work')}
                >
                    <span><Calendar /></span>
                    <span className='text-sm hidden md:flex'>Work Plan</span>
                </Link>
            </li>
        </ul>

        {/* Navigation links */}
        <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
            <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-[#072F54] to-[#2e9aff] rounded-full'>
                {""}
                <span className='flex items-center justify-center md:hidden'>?</span> <span className='hidden md:flex'>Need Help?</span>
            </p>
        </div>
    </div>
  )
}

export default Sidebar