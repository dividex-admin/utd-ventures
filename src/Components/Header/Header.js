import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

  return (
    <div className='flex items-center justify-between p-4 px-4 md:px-9 border border-solid border-b-[1] font-Manrope'>
      <Link className='mr-[8]' to={'/'}><img src={logo} /></Link>
      <div className='flex items-center'>
        <nav>
          <ul className='flex items-center space-x-5 text-lg leading-4 list-none'>
            <li>
              {/* <NavLink
                to={'/'}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'p-6'
                    : isActive
                    ? 'border-b-4 border-themecolor p-1'
                    : ''
                }
              >
                Home{' '}
              </NavLink> */}
            </li>
            <li>
            {/* <NavLink
                to={'/products'}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'p-6'
                    : isActive
                    ? 'border-b-4 border-themecolor p-1'
                    : ''
                }
              >
                Products{' '}
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                to={'/about'}
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'p-6'
                    : isActive
                    ? 'border-b-4 border-themecolor p-1 whitespace-nowrap'
                    : 'whitespace-nowrap'
                }
              >
                About Us{' '}
              </NavLink> */}
            </li>
            {/* <li>
              <Link>Contact Us </Link>
            </li> */}
          </ul>
        </nav>

        {/* <div className='h-10 separator w-[1] bg-gray-400 mx-9'></div>
        <Link to={'/signup'} className='px-4 py-2 mr-3 font-bold border border-solid rounded-md text-themecolor border-themecolor'>Sign Up </Link>
        <Link to={'/login'}  className='px-4 py-2 font-bold border border-solid rounded-md text-themecolor border-themecolor'>Login</Link> */}
      </div>
    </div>
  );
};

export default Header;
