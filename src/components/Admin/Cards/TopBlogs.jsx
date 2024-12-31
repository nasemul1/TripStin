import React from 'react'

const TopBlogs = () => {

    const topBLogs = [
        {
            id: 1,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
            views: '23434345'
        },
        {
            id: 2,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
            views: '23434345'
        },
        {
            id: 3,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
            views: '23434345'
        },
        {
            id: 4,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
            views: '23434345'
        },
        {
            id: 5,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
            views: '23434345'
        }
    ];

  return (
    <div className='p-4 shadow-md rounded-md text-sm'>
        <p className='text-base text-slate-800 font-semibold'>Top Blogs</p>
        <div className='mt-4 pb-1 flex border-b'>
            <p className='w-3/4'>Title</p>
            <p>Views</p>
        </div>
        { topBLogs.map((post)=>(
                <div key={post.id} className='mt-4 pb-1 flex'>
                    <p className='w-3/4 font-noto'>{post.title}</p>
                    <p>{post.views}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TopBlogs