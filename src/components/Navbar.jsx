import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Divide as Hamburger } from 'hamburger-react';

const Navbar = ({rName}) => {
    const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-white flex items-center justify-between py-5 font-medium">
      <NavLink to="/">
        <img src={logo} className="w-24 md:w-28 lg:w-36" alt="logo" />
      </NavLink>
      <ul className="hidden sm:flex gap-5 text-[12px] lg:text-sm text-[#0C3358]">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FBC108] hidden" />
        </NavLink>
        <NavLink to="/destinations" className="flex flex-col items-center gap-1">
          <p>DESTINATIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FBC108] hidden" />
        </NavLink>
        <NavLink to="/travel_blog" className="flex flex-col items-center gap-1">
          <p>TRAVEL BLOG</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FBC108] hidden" />
        </NavLink>
        <NavLink to="/signin" className="flex flex-col items-center gap-1">
          <p>SIGN IN</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FBC108] hidden" />
        </NavLink>
      </ul>
      <div className='sm:hidden relative'>
        <div className='scale-[0.60] md:scale-75 px-[2px] border-2 md:border-4 border-[#073258] rounded'>
          <Hamburger rounded toggled={isOpen} toggle={setOpen} size={30} color='#073258' />
        </div>
        {isOpen && (
          <div className='absolute z-50 max-w-80 w-max right-0 p-7 rounded-md flex flex-col items-center gap-y-4 text-[#073258] font-semibold bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
            <p className="font-pacifico text-xl">"Say Yes to new adventures"</p>
            <hr className='w-full border-2 border-[#073258]' />
            <NavLink to='/destinations' className=' hover:text-[#FBC108]'>Destinations</NavLink>
            <NavLink to='/travel_blog' className='hover:text-[#FBC108]'>Travel Blogs</NavLink>
            {rName !== 'profile' && (
              <div className='pt-2 flex gap-x-4 items-center'>
                <NavLink to='/signin' className='hover:text-[#073258] hover:bg-[#FBC108] px-6 py-2 rounded-full border-2 border-[#073258] hover:border-[#073258]'>
                  Sign In
                </NavLink>
                <NavLink to='/signup' className='border-2 border-[#073258] px-6 py-2 rounded-full bg-[#073258] text-white hover:text-[#073258] hover:bg-[#FBC108]'>
                  Sign Up
                </NavLink>
              </div>
            )}
            {rName === 'profile' && <NavLink to='/profile' className='hover:text-[#FBC108]'>Profile</NavLink>}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;