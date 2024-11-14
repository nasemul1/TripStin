import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import side from '../../images/background/sunamganj.webp';
import { toast } from 'react-toastify';

const SignIn = () => {
  const URL = import.meta.env.VITE_API_URL;
  const [view, setView] = useState('password');

  const viewClick = () => {
    if(view === 'password') setView('text');
    else if(view === 'text') setView('password');
  }

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          // Authorization: 'Bearer 123'
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error("Login Failed 😕");
      }
      else {
        const result = await response.json();
        const { token } = result;
        localStorage.setItem('authToken', token);
        toast("Login Sucessfull 🥳");
        navigate('/profile');
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl">Welcome Back👋</h2>
            <p className="text-sm mt-2">Explore your next adventure with us - the journey begins now!</p>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input className="p-2 mt-6 text-sm text-gray-950 rounded-md border outline-none" value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
              <div className="relative">
                <input className="p-2 text-sm text-gray-950 rounded-md border w-full outline-none" value={password} onChange={(e) => setPassword(e.target.value)} type={view} name="password" placeholder="Password" />
                <svg onClick={viewClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <button className="bg-gray-950 rounded-md text-white py-2 hover:scale-105 duration-300">Login</button>
            </form>

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-md mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-gray-950">
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              Login with Google
            </button>
            <div className="mt-5 text-xs border-b border-gray-950 py-4 text-blue-800">
              <a href="#">Forgot your password?</a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-gray-950">
              <p>Don't have an account?</p>
              <Link to='/signup' className="py-2 px-5 sm:px-2 lg:px-5 bg-white text-blue-800 border rounded-md hover:scale-110 duration-300">Sign Up</Link>
            </div>
          </div>
          <div className="md:block hidden w-1/2 relative">
            <img className="rounded-2xl" src={side} />
            <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center font-pacifico'>
              <p>Work</p>
              <p>Travel</p>
              <p>Save</p>
              <p>Repeat</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SignIn