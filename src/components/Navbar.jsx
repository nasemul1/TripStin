import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Divide as Hamburger } from "hamburger-react";

const Navbar = ({ rName }) => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const data = JSON.parse(localStorage.getItem("userDetails"));
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setLoggedIn(!!token);

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem("authToken");
      setLoggedIn(!!updatedToken);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.dispatchEvent(new Event("storage"));
    navigate("/");
  };

  return (
    <nav
      className={`px-5 sm:px-14 lg:px-28 2xl:px-36 fixed top-0 z-50 w-screen bg-white shadow-md flex items-center justify-between py-5 font-poppins font-medium transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} className="w-24 md:w-28 2xl:w-36" alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center gap-5 text-sm text-slate-900">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="px-2 py-1 rounded-md hover:bg-slate-50">Home</p>
        </NavLink>

        {/* Travel Blog with Dropdown */}
        <NavLink to='/travel_blog' className="flex flex-col items-center gap-1">
          <p className="px-2 py-1 rounded-md hover:bg-slate-50">Travel Blogs</p>
        </NavLink>

        {!loggedIn ? (
          <>
            <NavLink to="/signin" className="flex flex-col items-center gap-1">
              <p className="px-2 py-1 rounded-md hover:bg-slate-50">Sign In</p>
            </NavLink>
            <NavLink to="/signup" className="flex flex-col items-center gap-1">
              <p className="px-2 py-1 rounded-md hover:bg-slate-50">Sign Up</p>
            </NavLink>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <NavLink to="/profile" className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-x-2">
                <p>{data.name}</p>
                <div className="w-8 h-8 rounded-full bg-blog bg-cover border-2 border-blue-300"></div>
              </div>
            </NavLink>
          </div>
        )}
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden relative">
        <div className="scale-[0.60] md:scale-75 px-[2px] border-2 md:border-4 border-[#073258] rounded">
          <Hamburger
            rounded
            toggled={isOpen}
            toggle={setOpen}
            size={30}
            color="#073258"
          />
        </div>
        {isOpen && (
          <div className="absolute z-50 max-w-80 w-max right-0 p-7 rounded-md flex flex-col items-center gap-y-4 text-[#073258] font-semibold bg-white shadow-md">
            <p className="font-pacifico text-xl">"Say Yes to new adventures"</p>
            <hr className="w-full border-2 border-[#073258]" />
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <div className="relative">
              <NavLink
                to="/travel_blog"
                className="hover:text-[#FBC108]"
                onClick={() => setOpen(false)}
              >
                Travel Blog
              </NavLink>
            </div>
            {!loggedIn ? (
              <div className="pt-2 flex gap-x-4 items-center">
                <NavLink
                  to="/signin"
                  className="hover:text-[#073258] hover:bg-[#FBC108] px-6 py-2 rounded-full border-2 border-[#073258] hover:border-[#073258]"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="border-2 border-[#073258] px-6 py-2 rounded-full bg-[#073258] text-white hover:text-[#073258] hover:bg-[#FBC108]"
                >
                  Sign Up
                </NavLink>
              </div>
            ) : (
              <>
                <NavLink to="/profile" className="hover:text-[#FBC108]">
                  Profile
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="hover:text-[#FBC108]"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
