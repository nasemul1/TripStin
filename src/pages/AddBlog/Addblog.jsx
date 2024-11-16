import React, { useState } from 'react';

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

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer 123',
      },
      body: form,
    };

    try {
      const response = await fetch('http://localhost:5000/upload', options);
      const data = await response.json();
      console.log('Upload successful:', data);
      alert('Blog post uploaded successfully!');
    } catch (error) {
      console.error('Error uploading:', error);
      alert('Failed to upload the blog post');
    }
  };

  return (
    <div className='mx-auto mt-28 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <form onSubmit={handleUpload}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={handleFileChange} accept="image/*" />
        </div>
        <div>
          <label>Is Published:</label>
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>
        <div>
          <label>Is Featured:</label>
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
        </div>
        <button type="submit">Upload Blog Post</button>
      </form>
    </div>
  );
};

export default Addblog;
