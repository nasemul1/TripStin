import React, { useEffect, useState } from 'react';

import Blog from '../../components/Blog';
import Hero from '../../components/Hero';

const Home = () => {
    return (
        <div className='mx-auto mt-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <Hero />
            <Blog head="Travel Blog" show={1} limit={8}/>
        </div>
    )
}

export default Home