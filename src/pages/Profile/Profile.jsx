import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Blog from '../../components/Blog';

const Profile = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem('userDetails'));

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);

  const handleClick = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userDetails');
    window.dispatchEvent(new Event("storage"));
    navigate('/');
  }

  return (
    <div className='mx-auto mt-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='w-full h-60 sm:h-72 2xl:h-[360px] bg-gray-100 rounded-lg overflow-hidden relative'>
        <div className='h-1/2 bg-hero-img bg-cover'></div>
        <div className='ml-6 sm:ml-10 xl:ml-16 mr-4 mt-3 2xl:mt-5'>
          <div className='w-28 h-28 sm:w-40 2xl:w-56 sm:h-40 2xl:h-56 border-8 border-white rounded-full bg-blog bg-cover overflow-hidden absolute top-[32%] z-40 '></div>
          <div className='pl-32 sm:pl-44 2xl:pl-60 flex flex-col sm:flex-row justify-between gap-y-4 sm:gap-y-0'>
            <div>
              <h1 className='2xl:text-2xl font-bold'>{data.name}</h1>
              <h2 className='text-xs 2xl:text-lg'>@{data.username}</h2>
            </div>
            <div className='flex gap-2'>
              <Link to='/addblog' className='px-3 py-2 bg-blue-600 hover:bg-blue-500 duration-300 text-[9px] sm:text-sm  text-white font-semibold rounded-md flex items-center'>Add Blog</Link>
              <Link to='/profile' className='px-3 py-2 border-2 border-red-500 hover:bg-red-500 text-[9px] sm:text-sm hover:text-white duration-300 text-red-500 font-semibold rounded-md flex items-center'>Profile Info</Link>
            </div>
          </div>
        </div>
      </div>
      <Blog head="My Blogs"/>
      <button onClick={handleClick} className='px-6 py-2 bg-gray-950 text-white'>Logout</button>
    </div>
  )
}

export default Profile