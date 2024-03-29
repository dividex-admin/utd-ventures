import React from 'react';
import logo from '../../assets/images/utd-logo.jpg';
import FooterCard from '../FooterCard/FooterCard';
import officeAddImg from '../../assets/icons/office.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';

import linkedin from '../../assets/icons/linkedIn.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';


const Footer = () => {
  return (
    <>
    <div className='mx-auto border-t-2 bg-slate-50'>
      <div className='flex-col text-center font-overpass'>
        <div className='font-semibold font-md my-6'>
          <div className='hidden mx-4 md:block'>
          L-76, Lajpat Nagar 2nd Floor, New Delhi 110024, India | The Binary Tower, 10th Floor, Office 1003, Business Bay, Dubai, UAE
          </div>

          <div className=' mx-4  flex-col md:hidden'>
            <div>
            L-76, Lajpat Nagar 2nd Floor, New Delhi 110024, India
            </div>
            <div>
              The Binary Tower, 10th Floor, Office 1003, Business Bay, Dubai, UAE
            </div>
          </div>
          </div> 
        <div className='font-xs'>
          © Copyright 2024 - UTD Ventures
        </div>
      </div>
    </div>
    </>
  );
};
export default Footer;
