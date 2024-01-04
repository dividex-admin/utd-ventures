import React from 'react';
import logo from '../../assets/images/logo.svg';
import FooterCard from '../FooterCard/FooterCard';
import officeAddImg from '../../assets/icons/office.svg';
import phone from '../../assets/icons/phone.svg';
import email from '../../assets/icons/email.svg';

import linkedin from '../../assets/icons/linkedIn.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';


const Footer = () => {
  return (
    <div className='p-5 md:p-20 bg-themecolor bg-gradient-to-t from-lightthemecolor	flex flex-col md:flex-row text-white'> {/* Adjust padding for smaller screens */}
    <div className='w-full md:w-3/5'> {/*left part */}
      <div className='bg-white py-1 pl-2 pr-4 w-60 rounded'>
      <img src={logo} className='m-4 w-60 md:w-60' alt="Logo" /> {/* Make the logo responsive */}
      </div>

          <div className='mt-8 font-manrope w-full md:w-90'> {/* Adjust margin for smaller screens */}
            <span className='font-bold text-md'>Disclaimer</span>
            <p className='text-sm'>This is a Beta version of the website. Any thoughts/ideas shared here shouldn’t be considered as investment advice. </p>
          </div>
          <div className='flex mt-10'>
          <a href="https://www.facebook.com/Dividex.in" target="_blank"><img src={facebook} className='mr-4 w-6' alt="Logo" /> </a>
          <a href='https://www.instagram.com/dividex.in/' target="_blank"><img src={instagram} className='mr-4 w-6' alt="Logo" /> </a>
          <a href='https://www.linkedin.com/company/dividexalt/' target="_blank"><img src={linkedin} className='mr-4 w-6' alt="Logo" /> </a>
          </div>
     </div>
     <div className='md:ml-8 mt-14 md:my-4 w-1/3'>
     <h3 className='text-xl font-bold'>Useful Links</h3>
      <ul className='text-sm font-manrope pt-4'>
        <li className='my-2'><a href='/'>Home</a></li>
        <li className='my-2'><a href='/about'>About us</a></li>
        <li className='my-2'><a href='/products'>Products</a></li>
        <li className='my-2'><a href='/terms-of-usage'>Terms of Usage</a></li>
        <li className='my-2'><a href='privacy-policy'>Privacy Policy</a></li>
      </ul>

     </div>
      <div className='flex mt-14 md:my-4 flex-col justify-between gap-4'> {/* Adjust margin for smaller screens */}
        <h3 className='text-xl font-bold'>Reach Us</h3>
        <FooterCard
          title={'Registered Office'}
          subTtitle={<span>Ground Floor, 1-11-219, Begumpet,<br /> Hyderabad – 500016</span>}
          icon={officeAddImg}
        />

        <FooterCard type="tel" title={'Contact Us'} subTtitle={'+918600076714'} icon={phone} />

        <FooterCard type="link" title={'Mail Us'} subTtitle={'contact@dividex.in'} icon={email} />
      </div>
    </div>
  );
};
export default Footer;
