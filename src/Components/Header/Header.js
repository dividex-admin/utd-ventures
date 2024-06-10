import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/utd-logo.jpg';
import blob from '../../assets/images/blob_design.svg';
import concentric from '../../assets/images/concentric_circle.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(localStorage.getItem('activeItem') || 'Home');

  useEffect(() => {
    localStorage.setItem('activeItem', activeItem);
  }, [activeItem]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
    closeMobileMenu();
  };

  return (
    <>
      <img className='test z-0 absolute w-1/2' src={concentric} />
      <img className="z-0 absolute mt-200 hidden lg:block" src={blob} />

      <div className='pt-4 md:pt-14 md:mx-auto md:w-10/12 flex items-center justify-between p-4 px-4 md:px-9 font-maven-pro'>
        <div className=''>
          <a className='md:ml-14 flex items-center justify-center' href='/'>
            <img className="w-16 h-auto md:w-20 md:h-auto" src={logo} />
            <span className='z-10 text-themecolor text-md text-nowrap md:text-2xl font-bold'>UTD Ventures</span>
          </a>
        </div>

        <div className="block lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FaTimes className="text-gray-700 cursor-pointer" size={24} />
          ) : (
            <FaBars className="text-gray-700 cursor-pointer" size={24} />
          )}
        </div>

        <div className={`lg:hidden fixed top-0 left-0 bg-white shadow-md w-full transition-transform duration-300 ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'} z-20`}>
          <div className="p-4 flex items-center justify-between">
            <a href='/' className='flex items-center justify-center'>
              <img className="w-16 h-auto md:w-20 md:h-auto" src={logo} />
              <span className='z-10 text-themecolor text-md text-nowrap md:text-2xl font-bold'>UTD Ventures</span>
            </a>
            <div onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes className="text-gray-700 cursor-pointer" size={24} />
              ) : (
                <FaBars className="text-gray-700 cursor-pointer" size={24} />
              )}
            </div>
          </div>
          <div className="flex mb-6 items-center justify-evenly">
            <Link to="/" className={`text-lg font-medium font-overpass ${activeItem === "Home" ? 'text-secondarythemecolor font-black text-3xl underline' : 'text-gray-600 text-thin hover:text-blue-500'} py-2`} onClick={() => handleItemClick("Home")}>Home</Link>
            <Link to="/companies" className={`text-lg font-medium font-overpass ${activeItem === "Companies" ? 'text-secondarythemecolor font-black text-3xl underline' : 'text-gray-600 text-thin hover:text-blue-500'} py-2`} onClick={() => handleItemClick("Companies")}>Companies</Link>
          </div>
        </div>

        <div className='hidden lg:flex flex items-center'>
          <Link to="/" className={`text-lg font-medium font-overpass ${activeItem === "Home" ? 'text-secondarythemecolor font-black text-3xl underline' : 'text-gray-600 text-thin hover:text-blue-500'} ml-8`} onClick={() => setActiveItem("Home")}>Home</Link>
          <Link to="/companies" className={`text-lg font-medium font-overpass ${activeItem === "Companies" ? 'text-secondarythemecolor font-black text-3xl underline' : 'text-gray-600 text-thin hover:text-blue-500'} ml-8`} onClick={() => setActiveItem("Companies")}>Companies</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
