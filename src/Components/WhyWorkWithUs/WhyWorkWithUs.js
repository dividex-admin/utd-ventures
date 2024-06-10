import React from 'react';

import singleStroke from '../../assets/images/single_stroke.svg';
import strokePath from '../../assets/images/path.svg';
import strategies from '../../assets/images/four_dots.svg';
import wallet from '../../assets/images/wallet_check.svg';
import chart from '../../assets/images/chart.svg';
import judge from '../../assets/images/judge.svg';

import DynamicCard from '../../Components/DynamicCardComponent';


const WhyWorkWithUs = () => {
  return (
    <>
     <div className='hidden md:block mt-24 md:mb-20'>
        <div className='text-center font-overpass font-black text-2xl md:text-4xl text-themecolor md:mb-4'> Why Work With Us</div>
        <img className="mx-auto mb-16 w-2/12 md:w-2/12" src={strokePath}/>

        <div className='w-10/12 mx-auto flex'>
            
        <div className='flex flex-col border-r-2'>
          <div className='px-16 pb-16 border-b-2'>
            <div className='mx-auto'>
            <img className="w-10 h-10 my-6" src={strategies}/>

              <h3 className=' font-overpass font-black text-2xl text-themecolor'>
                Tailored Investment Strategies
              </h3>
              <img className="mx-2 mb-4 w-10" src={singleStroke} alt="singleStroke"/>

              <p className='text-xl text-slate-600'>
              We believe in a bespoke approach to investment, understanding that each startup has unique needs and visions. Our flexible funding options are designed to match your startup's specific stage and goals.
              </p>
            </div>
          </div>

          <div className='mt-10'>
            <div className='px-16 mx-auto '>

            <img className="w-10 h-10 my-6" src={chart}/>

              <h3 className='font-overpass font-black text-2xl text-themecolor'>
              Commitment to Growth  Innovation
            </h3>
            <img className="mx-2 mb-4 w-10" src={singleStroke} alt="singleStroke"/>

              <p className='text-xl text-slate-600'>
              At UTD Ventures, we’re committed to the long-term success of our portfolio companies. We work closely with our founders, fostering an environment of continuous innovation and growth.              </p>

            </div>
          </div>

        </div>


        <div className='flex flex-col mt-24'>
          <div className='px-16 pb-16 border-b-2'>
            <div className='mx-auto'>
            <img className="w-10 h-10 my-6" src={wallet}/>

              <h3 className=' font-overpass font-black text-2xl text-themecolor'>
              Strategic Support Beyond Capital
              </h3>
              <img className="mx-2 mb-4 w-10" src={singleStroke} alt="singleStroke"/>

              <p className='text-xl text-slate-600'>
              Our involvement goes beyond the check. We provide hands-on support, mentorship, and access to a vast network of industry leaders, potential partners, and future customers.              </p>
            </div>
          </div>

          <div className='px-16 mt-10'>
            <div className='ml-10 '>

            <img className="w-10 h-10 my-6" src={judge}/>

              <h3 className='font-overpass font-black text-2xl text-themecolor'>
              Global Reach
              </h3>
              <img className="mx-2 mb-4 w-10" src={singleStroke} alt="singleStroke"/>

              <p className='text-xl text-slate-600'>
              Our advisory panel consists of industry veterans with decades of global experience across 10+ countries.
              </p>
            </div>
          </div>

        </div>


        
        </div>

      </div>


      {/* mobile version  */}

      <div className='md:hidden'>
  

      <DynamicCard
        imageSrc={strategies}
        title="Tailored Investment Strategies"
        content="We believe in a bespoke approach to investment, understanding that each startup has unique needs and visions. 
        Our flexible funding options are designed to match your startup's specific stage and goals."
      />
      <DynamicCard
        imageSrc={wallet}
        title="Strategic Support Beyond Capital"
        content="Our involvement goes beyond the check.
         We provide hands-on support, mentorship, and access to a vast network of industry leaders, potential partners, and future customers."
      />

      <DynamicCard
        imageSrc={chart}
        title="Commitment to Growth  Innovation"
        content="At UTD Ventures, we’re committed to the long-term success of our portfolio companies. We work closely with our founders, fostering an environment of continuous innovation and growth." 
        />

      <DynamicCard
        imageSrc={judge}
        title="Global Reach"
        content="Our advisory panel consists of industry veterans with decades of global experience across 10+ countries."
        />
      

      {/* Add more instances of DynamicComponent with different props */}
    </div>
    </>
  );
};

export default WhyWorkWithUs;
