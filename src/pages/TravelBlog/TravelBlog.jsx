import React, { useEffect, useState } from 'react';
import sajek from '../../images/Blog/sajek.jpg';
import { Link } from 'react-router-dom';

const TravelBlog = () => {
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
            } finally {
                setLoading(false);
            }
        };
    
        fetchDataForPosts();
    }, [URL]);

    return (
        <div className='mt-28 w-full flex flex-col items-center'>
            <h2 className='mb-4 text-2xl sm:text-3xl text-gray-700 font-bold font-merienda'>Travel Blogs</h2>
            {/* Loading and Error Messages */}
            {loading && <p>Loading...</p>}
            {error && <p className='text-red-500'>{error}</p>}

            <div id='data-here' className='w-full flex flex-wrap justify-center'>
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((post) => (
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
                            <h3 className='mt-2 w-[340px] text-lg text-center font-semibold group-hover:text-red-500'>
                                {post.title}
                            </h3>
                        </Link>
                    ))
                ) : (
                    !loading && <p className='text-gray-500'>No posts available</p>
                )}
            </div>
        </div>
    );
};

export default TravelBlog