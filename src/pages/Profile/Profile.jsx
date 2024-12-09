import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Blog from '../../components/Blog';
import coverBg from '../../images/components-img/hero.webp';
import profileBg from '../../images/destination/sunamganj.webp';

const Profile = () => {
  // variables
  const navigate = useNavigate();
  const [data, setData] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/signin');
    }
    else{
      setData(JSON.parse(localStorage.getItem('userDetails')));
    }
  }, [navigate]);


  return (
    <div className='mx-auto mt-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='w-full h-60 sm:h-72 2xl:h-[360px] bg-gray-100 rounded-lg overflow-hidden relative'>
        <div className='h-1/2 overflow-hidden flex items-center'>
          <img src={coverBg} alt="" />
        </div>
        <div className='ml-6 sm:ml-10 xl:ml-16 mr-4 mt-3 2xl:mt-5'>
          <div className='w-28 h-28 sm:w-40 2xl:w-56 sm:h-40 2xl:h-56 border-8 border-white rounded-full overflow-hidden absolute top-[32%] z-40 flex items-center'>
            <img src={profileBg} alt="" />
          </div>
          <div className='pl-32 sm:pl-44 2xl:pl-60 flex flex-col sm:flex-row justify-between gap-y-4 sm:gap-y-0'>
            <div>
              <h1 className='2xl:text-2xl text-slate-900 font-bold'>{data.name}</h1>
              <h2 className='text-xs 2xl:text-lg text-slate-900'>@{data.username}</h2>
            </div>
            <div className='flex gap-2'>
              <Link to='/addblog' className='px-3 py-1 sm:py-2 border-2 border-slate-900 hover:bg-slate-900 text-[9px] sm:text-sm hover:text-white duration-300 text-slate-900 font-semibold rounded flex items-center'>Add Blog</Link>
              <Link to='/profile_info' className='px-3 py-1 sm:py-2 border-2 border-red-500 hover:bg-red-500 text-[9px] sm:text-sm hover:text-white duration-300 text-red-500 font-semibold rounded flex items-center'>Profile Info</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-[420px]'><Blog head="My Blogs" show={0} limit={12}/></div>
    </div>
  )
}

export default Profile