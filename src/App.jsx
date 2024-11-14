import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Destinations from './pages/Destinations/Destinations'
import SingleDestination from './pages/SingleDestination/SingleDestination'
import TravelBlog from './pages/TravelBlog/TravelBlog'
import Profile from './pages/Profile/Profile'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Navbar from './components/Navbar'
import SBlog from './pages/Blog/SBLog'
import Policy from './pages/Policy/Policy'
import About from './pages/About/About'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-poppins'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<SingleDestination />} />
        <Route path="/travel_blog" element={<TravelBlog />} />
        <Route path="/travel_blog/:id" element={<SBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App