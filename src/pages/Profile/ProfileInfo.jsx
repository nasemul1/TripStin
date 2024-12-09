import React, { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";
import { Link, useNavigate } from 'react-router-dom';
import profile from '../../images/category-section/blog.webp'
import { toast } from 'react-toastify';

const ProfileInfo = () => {

    // variables 
    const navigate = useNavigate();
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('authToken');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // auth check
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
          navigate('/signin');
        }
    }, [navigate]);

    // fetch api
    useEffect(() => {
      const fetchData = async () => {
        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        
        try {
          const response = await fetch(url + '/user', options);
          const fetchData = await response.json();
          setData(fetchData.user);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    // logout code
    const handleClick = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userDetails');
        window.dispatchEvent(new Event("storage"));
        navigate('/');
    }

    if (loading) {
      return <div className='mx-auto mt-28 h-[520px] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex justify-center items-center'>
        <BarLoader color='#0C3358' />
      </div>;
    }

  return (
    <div className='mx-auto mt-28 mb-8 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-poppins text-slate-800'>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-start-1 col-span-12 md:col-span-4 flex flex-col gap-y-5'>
          <div className='p-4 w-full border rounded flex gap-x-4'>
            <img className='rounded-full w-16 h-16' src={profile} alt="" />
            <div className='flex flex-col justify-center'>
              <p className='text-lg font-semibold'>{data.name}</p>
              <p className='text-sm'>@{ data.username }</p>
            </div>
          </div>
          <div className='p-4 w-full border rounded'>
            <p className='text-md font-semibold'>Contact Information</p>
            <div className='mt-3 flex flex-col gap-y-2'>
              <p className='flex items-center gap-x-2 text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                {data.phone}
              </p>
              <p className='flex items-center gap-x-2 text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {data.email}
              </p>
              <p className='flex items-center gap-x-2 text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {data.user_info.address ? `${ data.user_info.address }, ${data.user_info.city}, ${data.user_info.country}` : '-'}
              </p>
              <p className='flex items-center gap-x-2 text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
                {data.user_info.nid ? `${data.user_info.passport ? `${data.user_info.passport}` : `${data.user_info.nid}`}` : '-'}
              </p>
              <p className='flex items-center gap-x-2 text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                {data.user_info.education}
              </p>
            </div>
          </div>
        </div>
        <div className='col-start-1 col-span-12 md:col-span-8'>
          <div className='w-full p-4 border rounded flex flex-col gap-y-5'>
            <div className='w-full'>
              <p className='text-md font-semibold'>About</p>
              <p>{data.user_info.about ? `${data.user_info.about}` : '-'}</p>
            </div>
            <div className='w-full'>
              <p className='text-md font-semibold'>Experience</p>
              <p>{data.user_info.experience ? `${data.user_info.experience}` : '-'}</p>
            </div>
            <div className='w-full'>
              <p className='text-md font-semibold'>Hobbies</p>
              <p>{data.user_info.hobbies ? `${data.user_info.hobbies}` : '-'}</p>
            </div>
            <div className='w-full'>
              <p className='text-md font-semibold'>Tourism Experience</p>
              <p>{data.user_info.tourism_experience ? `${data.user_info.tourism_experience}` : '-'}</p>
            </div>
            <div className='w-full'>
              <p className='text-md font-semibold'>Language</p>
              <p>{data.user_info.languages ? `${data.user_info.languages}` : '-'}</p>
            </div>
          </div>
          <div className='mt-4 w-full flex gap-2'>
            <Link to='/profile_edit' className='px-4 py-2 border-2 border-slate-900 hover:bg-slate-800 duration-150 text-[9px] sm:text-sm  text-slate-900 hover:text-white font-semibold rounded flex items-center'>Edit info</Link>
            <button onClick={handleClick} className='px-4 py-2 border-2 border-red-500 hover:bg-red-500 text-[9px] sm:text-sm hover:text-white duration-150 text-red-500 font-semibold rounded flex items-center'>Logout</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProfileInfo