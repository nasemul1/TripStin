import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Dropdown = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userDetails');
        window.dispatchEvent(new Event("storage"));
        navigate('/');
    }
  return (
    <div className="group relative cursor-pointer font-poppins">
        <NavLink to="/profile" className="menu-hover flex flex-col items-center gap-1">
            <div className="flex items-center gap-x-2">
                <p>user</p>
                <div className="w-8 h-8 rounded-full bg-blog bg-cover border-2 border-blue-300"></div>
            </div>
        </NavLink>
        <div className='w-[120px] hidden absolute -right-0 shadow-xl rounded text-sm bg-white group-hover:flex flex-col items-center'>
            <Link to='/profile' className='py-2 rounded w-full text-center hover:bg-slate-50'>My Blogs</Link>
            <Link to='/profile_info' className='py-2 rounded w-full text-center hover:bg-slate-50'>Profile Info</Link>
            <button onClick={handleClick} className='py-2 rounded w-full text-center hover:bg-slate-50 text-red-500'>Logout</button>
        </div>
    </div>
  )
}

export default Dropdown