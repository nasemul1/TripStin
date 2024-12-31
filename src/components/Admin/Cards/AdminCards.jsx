import React from 'react'

const AdminCards = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-4 items-center font-poppins'>
        <div className='w-full sm:flex-grow  shadow-md p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='bg-[#072F54] text-white p-3 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-sm text-gray-600'>Total Users</p>
                    <p className='text-slate-800 font-semibold'>559391</p>
                </div>
            </div>
            <div className='mt-4 pt-2 text-sm text-gray-600 font-medium border-t'>
                <p><span className='text-green-600'>+55%</span> than last week</p>
            </div>
        </div>
        <div className='w-full sm:flex-grow  shadow-md p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='bg-[#072F54] text-white p-3 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-sm text-gray-600'>Total Visitors</p>
                    <p className='text-slate-800 font-semibold'>8359391</p>
                </div>
            </div>
            <div className='mt-4 pt-2 text-sm text-gray-600 font-medium border-t'>
                <p><span className='text-green-600'>+63%</span> than last week</p>
            </div>
        </div>
        <div className='w-full sm:flex-grow  shadow-md p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='bg-[#072F54] text-white p-3 rounded-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-sm text-gray-600'>Total Blogs</p>
                    <p className='text-slate-800 font-semibold'>48</p>
                </div>
            </div>
            <div className='mt-4 pt-2 text-sm text-gray-600 font-medium border-t'>
                <p><span className='text-red-600'>-10%</span> than last week</p>
            </div>
        </div>
        <div className='w-full sm:flex-grow  shadow-md p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='bg-[#072F54] text-white p-3 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='text-sm text-gray-600'>Pending Blogs</p>
                    <p className='text-slate-800 font-semibold'>5</p>
                </div>
            </div>
            <div className='mt-4 pt-2 text-sm text-gray-600 font-medium border-t'>
                <p><span className='text-red-600'>-15%</span> than last week</p>
            </div>
        </div>
    </div>
  )
}

export default AdminCards