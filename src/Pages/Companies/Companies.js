import React, { useState } from 'react';


import Footer from '../../Components/Footer/Footer';

import statiqLogo from '../../assets/images/statiq_logo.webp';
// import blueSmartLogo from '../../assets/images/blueSmart_logo.png';
import blueSmartLogo from '../../assets/images/BluSmart_logo_2023.jpeg';


import agnikulLogo from '../../assets/images/agnikul_logo.webp';
// import megaCabsLogo from '../../assets/images/megaCabs_logo.png';


import megaCabsLogo from '../../assets/images/megaCabs_logo2.svg';


import CompanyCard from '../../Components/CompanyCard';




const Companies = () => {
  return (
    <>
    <div className='mb-36'>
    <div className='mt-16 md:mt-24 '>
        <h1 className='justify-center text-center text-3xl md:text-5xl text-themecolor font-overpass'>Our Companies</h1>
        <svg viewBox="0 0 600 10" xmlns="http://www.w3.org/2000/svg">
      <line x1="270" y1="3" x2="370" y2="3" stroke="#1C7293" stroke-linecap="round" />
    </svg>
        <h3 className='w-1/2 mt-6 md:mt-2 mx-auto justify-center text-center text-xl md:text-3xl text-wrap text-slate-500 font-overpass'>We invest in visionary entrepreneurs’ companies across sectors in various stages of their journey</h3>
    </div>

    <div className='mt-10  md:mt-16 mx-auto flex flex-col md:flex-row justify-around w-7/12'>
    <CompanyCard
        logoSrc={statiqLogo}
        companyInfo="Statiq is the largest EV Charging Station network with 7000+ EV chargers providing affordable electric vehicle charging to EV owners across India.
        "
      />

    <CompanyCard
        logoSrc={blueSmartLogo}
        // companyName=""
        companyInfo="BluSmart is India's first and largest zero emission ride-hailing service and platform with a mission to build mobility smarter, safer, cleaner and more sustainable for a better future.

        "
      />

</div>
<div className=' mb-16 md:mt-6 flex-col md:flex-row mx-auto flex justify-around w-7/12'>
<CompanyCard
        logoSrc={agnikulLogo}
        // companyName=""
        companyInfo="AgniKul Cosmos Private Limited is an Indian aerospace manufacturer based in National Center for Combustion R&D of IIT Madras, Chennai."
      />

<CompanyCard
        logoSrc={megaCabsLogo}
        // companyName=""
        companyInfo="Mega Cabs is a radio taxi service provider in India, present in six cities in India with a fleet size of 2,500 cars."
      />

</div>
    
</div>
      
      <Footer />
    </>
  );
};

export default Companies;