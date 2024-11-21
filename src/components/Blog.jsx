import React, { useEffect, useState } from 'react';
import sajek from '../images/Blog/sajek.jpg'; // Using a placeholder image for all posts
import { Link } from 'react-router-dom';

const Blog = ({head}) => {
    const URL = import.meta.env.VITE_API_DEMO_URL;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchDataForPosts = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
                setData([]);
                console.log('Fetch Error:', err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchDataForPosts();
    }, [URL]);

    return (
        <div className='mt-10 w-full flex flex-col items-center'>
            <h2 className='mb-3 text-2xl sm:text-3xl text-gray-700 font-bold font-merienda'>{head}</h2>
            <div className='flex flex-col items-center'>
                {loading && <p>Loading...</p>}
                {error && <p className='text-red-500'>{error}</p>}

                <div id='data-here' className='w-full flex flex-wrap justify-center sm:justify-around xl:justify-between sm:gap-x-4 xl:gap-x-8'>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.slice(0, 9).map((post) => (
                            <Link
                                key={post.id}
                                to={`/travel_blog/${post.id}`}
                                className='p-4 flex flex-col items-center group'
                            >
                                <div className='w-[280px] h-[180px] overflow-hidden rounded-md'>
                                    <img
                                        src={sajek}
                                        alt={post.title}
                                        className='w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125'
                                    />
                                </div>
                                <h3 className='mt-2 w-[280px] text-lg text-center font-semibold group-hover:text-red-500'>
                                    {post.title}
                                </h3>
                            </Link>
                        ))
                    ) : (
                        !loading && <p className='text-gray-500'>No posts available</p>
                    )}
                </div>
                <Link to='/travel_blog' className='mt-6 px-6 sm:px-10 py-[6px] sm:py-2 rounded-md bg-black hover:bg-slate-800 text-sm text-white font-md'>
                    See More
                </Link>
            </div>
        </div>
    );
};

export default Blog;


{/* <Link key={post.id} to='/travel_blog/1' className="p-2 flex flex-col items-center group">
    <div className='w-[340px] h-[180px] overflow-hidden rounded-md'>
        <img src={sajek} alt="" className='w-[340px] object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125'/>
    </div>
    <h3 className='mt-2 w-[340px] text-lg group-hover:text-red-500 text-center font-semibold'>{post.title}</h3>
</Link> */}