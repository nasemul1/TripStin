import React from 'react'

const PendingBlog = () => {
    const pendingBlog = [
        {
            id: 1,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
        },
        {
            id: 2,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
        },
        {
            id: 3,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
        },
        {
            id: 4,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
        },
        {
            id: 5,
            title: 'কক্সবাজার জেলার দর্শনীয় স্থান',
        },
    ]
  return (
    <div className='w-full text-sm font-poppins p-4 shadow-md rounded-md'>
        <p className='text-base text-slate-800 font-semibold'>Pending Blogs</p>
        <div className='mt-4'>
            {pendingBlog.map((post) => (
                <div className='mt-2 border-b flex justify-between items-center'>
                    <p className='text-base font-noto font-semibold'>{post.title}</p>
                    <div className='p-2 flex gap-2'>
                        <button className='p-1 rounded-sm bg-green-600 hover:bg-green-500 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </button>
                        <button className='p-1 rounded-sm bg-red-600 hover:bg-red-500 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PendingBlog