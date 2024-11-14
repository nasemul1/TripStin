import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);

  const handleClick = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  }

  return (
    <div>
      <button onClick={handleClick} className='px-6 py-2 bg-gray-950 text-white'>Logout</button>
    </div>
  )
}

export default Profile