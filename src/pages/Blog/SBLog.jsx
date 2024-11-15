import React, { useEffect, useState } from 'react'
import sajek from '../../images/Blog/sajek.jpg'
import { useParams } from 'react-router-dom'

const SBLog = () => {
  const {id} = useParams();
  const URL = import.meta.env.VITE_API_DEMO_URL;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchDataForPosts = async () => {
          try {
              const response = await fetch(URL + '/' + id);
              if (!response.ok) {
                  throw new Error(`HTTP error: Status ${response.status}`);
              }
              const result = await response.json();
              setData(result);
          } catch (err) {
              setError(err.message);
              setData([]);
          } finally {
              setLoading(false);
          }
      };
  
      fetchDataForPosts();
  }, [URL]);

  return (
    <div className='mx-auto mt-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      <div className='w-full h-52 sm:h-72 lg:h-[480px] overflow-hidden rounded-lg'>
        <img src={sajek} alt="Blog image" className='w-full' />
      </div>
      <div className='mt-5 sm:mt-10 w-full'>
        <h1 className='text-lg sm:text-2xl 2xl:text-3xl font-bold'>{data.title}</h1>
        <p className='mt-2'>{data.content}</p>
      </div>
    </div>
  )
}

export default SBLog