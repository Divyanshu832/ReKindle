
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
=======
import { Link, NavLink } from "react-router-dom";
import AluminiRelations from "../../assets/Alumini_Relations.svg";


  return (

    <nav className="navbar">
      <div className="logo"><img src="src\assets\Logo.png" alt="" /></div>

      {/* Hamburger menu and nav links */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/dirportal" activeClassName="active">
          Alumni Connect
        </NavLink>
        <NavLink to="jobportal" activeClassName="active">
          Career Portal
        </NavLink>
        <NavLink to="/social" activeClassName="active">
          Social Hub
        </NavLink>
        <NavLink to="/donate" activeClassName="active">
          Donate
        </NavLink>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <span className="dropdown-title" onClick={toggleDropdown}>
            More
          </span>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="events">Events</Link>
              <Link to="clubs">Clubs</Link>
              <Link to="testimonial">Testimonials</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          )}
=======
    <header id="Header" className="sticky top-0 z-50 shadow-lg max-md:w-[450px]">
      <nav className="border-gray-200 bg-wsec px-2 py-2 max-md:py-1">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-evenly gap-2 font-grotesk text-xl font-black"
          >
            <img
              src={AluminiRelations}
              className="h-10 max-md:hidden"
              alt="Logo"
            />
          </Link>
          <div className="order-2 flex items-center font-grotesk font-black">
            <Link
              to="/signin"
              className="text-wlight rounded-lg bg-wpri px-3 py-1 text-xl hover:bg-wdark hover:text-clight focus:outline-none focus:ring-2 focus:ring-amber-900 max-md:px-2 max-md:text-sm"
            >
              Sign In
            </Link>
          </div>
          <div className="flex items-center justify-between font-grotesk text-xl font-black max-md:text-sm lg:order-1">
            <ul className="mt-0 flex flex-row space-x-1 font-black lg:space-x-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} border-0 px-3 hover:text-wpri max-md:rounded-2xl max-md:px-2`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
                }
              >
                Events
              </NavLink>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
                }
              >
                Donate
              </NavLink>
              <NavLink
                to="/alumini"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
                }
              >
                Alumini
              </NavLink>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `block rounded-3xl py-1 duration-200 ${isActive ? "bg-wlight text-wdark" : "text-clight"} px-3 hover:text-wpri max-md:px-2 lg:border-0`
                }
              >
                Jobs
              </NavLink>
            </ul>
          </div>
        </div>

        {/* Signup and Login buttons for mobile view */}
        <div className="auth-buttons mobile-auth-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn"> <Link to="signin">Login</Link></button>
        </div>
      </div>

      {/* Signup and Login buttons for desktop view */}
      <div className="auth-buttons desktop-auth-buttons">
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">
          <Link to="signin">Login</Link></button>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Header;
