import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import AdminCards from '../../components/Admin/Cards/AdminCards'
import TopBlogs from '../../components/Admin/Cards/TopBlogs'
import TopUser from '../../components/Admin/Cards/TopUser'
import PendingBlog from '../../components/Admin/Cards/PendingBlog'

const Admin = () => {
  return (
    <div className='m-2 md:m-4'>
      <AdminCards />
      <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-4 font-poppins'>
        <TopBlogs />
        <TopUser />
      </div>
      <PendingBlog />
    </div>
  )
}

export default Admin