import React, { useState } from 'react';
import { CREATE_LEAD } from '../../Apis/Api';
import fractal from '../../assets/images/fractal.webp';
import icici_bank from '../../assets/images/icici_bank.png';
import siemens from '../../assets/images/siemens.webp';
import tamasha from '../../assets/images/tamasha.webp';
import tata_motors from '../../assets/images/tata_motors.png';
import schneider from '../../assets/images/schneider.webp';
import goldman from '../../assets/images/goldman.webp';
import shopse from '../../assets/images/shopse.webp';
import blueSection from '../../assets/images/blue_section.png';
import whyUs from '../../assets/images/why_us.png';
import whyWorkWithUs from '../../assets/images/why_work_with_us.png';
import strokePath from '../../assets/images/path.svg';
import blob from '../../assets/images/blob_small.svg';
import strategies from '../../assets/images/four_dots.svg';
import wallet from '../../assets/images/wallet_check.svg';
import chart from '../../assets/images/chart.svg';
import judge from '../../assets/images/judge.svg';


import DynamicCard from '../../Components/DynamicCardComponent';






const UTDVentures = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    currentOccupation: '',
    designation: '',
    companyName: '',
    currentIndustry: '',
    industry: '',
    location: '',
    projectType: '',
    investmentRequired: '',
    annualIncome: '',
    expectedPayoutMaturity: '',
    otherExpectedIncome: '',
    toatalAnnualizedReturn: '',
    expertiseRequired: '',
    projectDuration: '',
    riskInvolved: '',
    blocker: '',
    yourInvestment: '',
    comment: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['Step 1', 'Step 2', 'Step 3'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    let flag=true;
    flag= validateInput(currentStep);
    
    if(flag){
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };


  const validateInput = (step) => {
    const formFields = {...formData};
    const formErrors = {};
    let formIsValid = true;

    
    return formIsValid;
   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted:', formData);

//   };


const finalSubmit = (e) => {
  e.preventDefault();
  let flag=true;
  flag= validateInput(currentStep);
  
  if(flag){
   handleSubmit(e);
  }
  else{
  }
};

  const handleSubmit = async (e) => {
        // Perform form submission logic here
        e.preventDefault();
    
    try {
      const response = await fetch(CREATE_LEAD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        // navigate('/thank-you');
                // history.push('/thank-you'); 
                window.location.replace('/thank-you');
      }

    } catch (error) {
      // Handle errors here
      console.error('Error submitting form data:', error);
    }
  };
  

  return (
    <>
    <div className='mt-10 md:mt-28 mb-10'>
    <div className='flex md:flex-row flex-col flex-center justify-center text-center text-3xl md:text-5xl font-overpass'>
      <div className='mt-2 mx-auto md:mr-2 font-black text-themecolor'>Backing Bold Ideas,</div>
      <div className='mt-2 mx-auto md:ml-2 font-semibold text-secondarythemecolor'>Driving Change</div>
    </div>
    <svg viewBox="0 0 600 10" xmlns="http://www.w3.org/2000/svg">
      <line x1="230" y1="3" x2="370" y2="3" stroke="#1C7293" stroke-linecap="round" />
    </svg>

    </div>

    {/* <img className="absolute" src={blob}/> */}
<h2 className='text-center text-lg md:text-2xl font-overlock mx-6 '>OUR TEAM</h2>    
    <div className="max-w-3xl flex flex-col mx-auto mt-6 mb-10">
         <h2 className='md:mb-6 text-center text-lg md:text-xl text-balance mx-auto w-10/12 sm:w-full text-slate-500 font-overpass'>At UTD ventures, our diverse team experts bring together more than two decades of industry-leading experience.</h2>

      <div className='hidden md:block web-logos'>
        <div className="mt-12 mb-8 flex justify-center">
          <img className="aspect-w-16 w-3/12 px-6 py-4 border mx-2 border-solid border-slate-400 rounded-md" src={fractal} />
          <img className="aspect-w-16 w-3/12 px-6 py-6 border mx-2  border-solid border-slate-400 rounded-md" src={icici_bank} />
          <img className="aspect-w-16  w-3/12 px-6 py-4 border mx-2  border-solid border-slate-400 rounded-md" src={siemens} />
          <img className="aspect-w-16  w-3/12 px-2 py-8 border mx-2  border-solid border-slate-400 rounded-md" src={tamasha} />
        </div>

        <div className="mb-20  flex justify-center">
          <img className="aspect-w-16 w-40 h-24 px-6 py-4 border mx-2 border-solid border-slate-400 rounded-md" src={tata_motors} />
          <img className="aspect-w-16 w-40 h-24 px-6 py-6 border mx-2  border-solid border-slate-400 rounded-md" src={schneider} />
          <img className="aspect-w-16 w-40 h-24 px-6 py-6 border mx-2  border-solid border-slate-400 rounded-md" src={goldman} />
          <img className="aspect-w-16 w-40 h-24 max-w-36 px-6 py-6 border mx-2  border-solid border-slate-400 rounded-md" src={shopse} />
        </div>

      </div>

      <div className='mobile-logos md:hidden'>
        <div className="mt-12 mb-4 flex justify-center">
          
          <img className="w-3/12  h-1/12  px-1 py-1 border mx-2  border-solid border-slate-400 rounded-md" src={siemens} />
          <img className="w-3/12 h-1/12 px-1 py-1 border mx-2  border-solid border-slate-400 rounded-md" src={goldman} />
          <img className="w-3/12 h-1/12  px-1 py-1 border mx-2  border-solid border-slate-400 rounded-md" src={tamasha} />
        </div>
        <div className="mb-4  flex justify-center">
        <img className="w-3/12 px-2 py-2 border mx-2 border-solid border-slate-400 rounded-md" src={fractal} />
          <img className="w-3/12 px-2 py-2 border mx-2  border-solid border-slate-400 rounded-md" src={icici_bank} />

          
        </div>
        <div className="mb-4  flex justify-center">
          <img className="w-2/12 h-1/12 px-2 py-3 border mx-2  border-solid border-slate-400 rounded-md" src={schneider} />
          <img className="w-2/12 h-1/12 px-2 py-2 border mx-2 border-solid border-slate-400 rounded-md" src={tata_motors} />

          <img className="w-2/12 h-1/12  px-2 py-1 border mx-2  border-solid border-slate-400 rounded-md" src={shopse} />
        </div>

      </div>
</div>


      {/* <div className='my-10'>
        <img className="mx-auto w-full"  src={blueSection}/>
      </div> */}

      <div className='my-10 flex-col font-overpass py-10 md:py-36 bg-cover text-white' style={{ backgroundImage: `url(${blueSection})` }}>
        <h2 className='text-center text-3xl mb-10'>About Us</h2>
        <div className='mx-auto w-10/12 md:w-8/12 text-center text-lg md:text-2xl'>
          We have invested in sectors such as EV, Space Tech, and Mobility, fuelling the future of innovation. Our ambition doesn't stop here we're on the hunt to diversify our portfolio by partnering with trailblazing new-age companies. If your venture is reshaping industries and pushing boundaries, let's drive the next wave of progress together.
        </div>
      </div>



      <div className='mt-24 md:mb-20'>
        <div className='text-center font-overpass font-black text-2xl md:text-5xl text-themecolor md:mb-4'> Why Work With Us</div>
        <img className="mx-auto mb-16 w-4/12 md:w-3/12" src={strokePath}/>

        <img className="hidden md:block mx-auto" src={whyWorkWithUs}/>

        </div>


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

export default UTDVentures;
