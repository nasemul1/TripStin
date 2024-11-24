import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '../../components/Editor/Editor';
import { toast } from 'react-toastify';

const Addblog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [isPublished, setIsPublished] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [userId, setUserId] = useState('123');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('title', title);
    form.append('content', content);
    form.append('image', image);
    form.append('user_id', userId);
    form.append('is_published', isPublished);
    form.append('is_featured', isFeatured);

    const token = localStorage.getItem('authToken');
    const url = import.meta.env.VITE_API_URL;

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `${token}`,
      },
      body: form,
    };

    try {
      const response = await fetch(url + '/article', options);
      const data = await response.json();
      
      toast('Uploaded successfull.🥳');
      toast('wait a bit for approval');
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Failed to upload the blog post');
    }
  };

  return (
    <div className='mx-auto mt-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <h2 className='mb-3 text-2xl sm:text-3xl text-center text-gray-700 font-bold font-merienda'>Add Blog</h2>
      <form onSubmit={handleUpload} className='py-5'>
          <div className='h-20 bg-sky-100 flex items-center justify-center border border-slate-300 rounded'>
            <input type="file" onChange={handleFileChange} accept="image/*" />
          </div>
          <div className='my-4 flex flex-col gap-y-2'>
            <label>Blog Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='bg-sky-100 p-3 text-sm outline-none border border-slate-300 rounded'
              required
            />
          </div>
          <div className='my-4 flex flex-col gap-y-2'>
            <label>Blog Content:</label>
            <Editor value={content} setValue={setContent} />
          </div>
          <div className='flex gap-x-3'>
            <button type="submit" className='px-3 py-1 sm:px-4 sm:py-2 border-2 border-slate-900 hover:bg-slate-900 text-slate-900 hover:text-white duration-300 font-semibold rounded'>Create</button>
            <Link to='/profile' className='px-3 py-1 sm:px-4 sm:py-2 border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white duration-300 font-semibold rounded'>Back</Link>
          </div>
      </form>
    </div>
  );
};

export default Addblog;
