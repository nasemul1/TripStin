import React from 'react'

const TopUser = () => {
    const user = [
        {
            id: 1,
            username: 'kuddus',
            view: 214568745,
            blogs: 14
        },
        {
            id: 2,
            username: 'kuddus',
            view: 214568745,
            blogs: 14
        },
        {
            id: 3,
            username: 'kuddus',
            view: 214568745,
            blogs: 14
        },
        {
            id: 4,
            username: 'kuddus',
            view: 214568745,
            blogs: 14
        },
        {
            id: 5,
            username: 'kuddus',
            view: 214568745,
            blogs: 14
        },
    ]
  return (
    <div className='p-4 flex-grow shadow-md rounded-md text-sm'>
        <p className='text-base text-slate-800 font-semibold'>Top User</p>
        <div className='mt-4 pb-1 flex border-b'>
            <p className='w-2/5'>Username</p>
            <p className='w-1/4'>Views</p>
            <p className='pl-2'>Blogs</p>
        </div>
        { user.map((user)=>(
                <div key={user.id} className='mt-4 pb-1 flex'>
                    <p className='w-2/5'>{user.username}</p>
                    <p className='w-1/4'>{user.view}</p>
                    <p className='pl-2'>{user.blogs}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TopUser