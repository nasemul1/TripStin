import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Destinations from './pages/Destinations/Destinations'
import SingleDestination from './pages/SingleDestination/SingleDestination'
import TravelBlog from './pages/TravelBlog/TravelBlog'
import Profile from './pages/Profile/Profile'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import SBlog from './pages/Blog/SBLog'
import Policy from './pages/Policy/Policy'
import About from './pages/About/About'
import Footer from './components/Footer'
import Addblog from './pages/AddBlog/Addblog'
import ProfileInfo from './pages/Profile/ProfileInfo'
import RedirectPage from './pages/EmailVerify/RedirectPage';
import ProfileEdit from './pages/Profile/ProfileEdit';
import Admin from './pages/Admin/Admin';

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ['/signin', '/signup', '/redirect'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className='w-screen text-poppins'>
      { !shouldHideNavbar && <Navbar /> }
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/destinations" element={<Destinations />} /> */}
          {/* <Route path="/destinations/:id" element={<SingleDestination />} /> */}
          <Route path="/travel_blog" element={<TravelBlog />} />
          <Route path="/addblog" element={<Addblog />} />
          <Route path="/travel_blog/:id" element={<SBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile_info" element={<ProfileInfo />} />
          <Route path="/profile_edit" element={<ProfileEdit />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/redirect" element={<RedirectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {!shouldHideNavbar && <Footer />}
      <ToastContainer />
    </div>
  )
}

export default App