import React, { useState } from 'react';
import { CREATE_LEAD } from '../../Apis/Api';

const InvestmentForm = () => {
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
    flag=true;
    if(currentStep==1){
      flag= validateInput();
    }
    if(flag){
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };


  const validateInput = () => {
    const formFields = {...formData};
    const formErrors = {};
    let formIsValid = true;

    if(!formFields["firstName"]){
      // alert("name cannot be empty");
      formIsValid = false;
      formErrors["firstName"] = "Cannot be empty";
      document.getElementById("firstName").classList.add("border-red-700");
      document.getElementById("firstNameError").classList.remove("hidden");
      
    }
    else{
      formIsValid = true;
      document.getElementById("firstName").classList.remove("border-red-700");
      document.getElementById("firstNameError").classList.add("hidden");
    }
    const phoneRegExp = /^[6-9](\d)(?!\1+$)\d{8}$/;
    if(!formFields["phoneNumber"].match(phoneRegExp)){
      formIsValid = false;
      formErrors["phoneNumber"] = "Cannot be empty";
      document.getElementById("phoneNumber").classList.add("border-red-700");
      document.getElementById("phoneNumberError").classList.remove("hidden");

    }
    else{
      formIsValid = formIsValid && true;
      document.getElementById("phoneNumber").classList.remove("border-red-700");
      document.getElementById("phoneNumberError").classList.add("hidden");
    }
    return formIsValid;
   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     console.log('Form submitted:', formData);

//   };

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
        
      }
      // Handle the response data here
      // navigate('/thank-you');
      // history.push('/thank-you'); 
      window.location.replace('/thank-you');

    } catch (error) {
      // Handle errors here
      console.error('Error submitting form data:', error);
    }
  };
  

  return (
    <>
    <h1 className='mt-4 mb-4 text-center text-3xl font-semibold text-themecolor font-lexend'>List Your Investment Idea </h1>
    <p className='text-center'>A Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
    <div className="max-w-5xl border border-solid rounded-[3] mx-auto my-10 p-6 bg-white rounded-md shadow">
         <h2 className='mt-4 mb-8 text-center text-2xl font-semibold font-lexend'>Project Details</h2>
      <div className="mb-20">
        <div className="flex items-center space-x-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex-1 ${
                index < currentStep ? 'text-themecolor' : 'text-gray-500'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="h-3 bg-slate-200 mt-2 rounded-full">
          <div
            className={`h-3 ${
              currentStep === 1 ? 'w-1/3' : currentStep === 2 ? 'w-2/3' : 'w-full'
            } bg-themecolor rounded-full`}
          ></div>
        </div>

        
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <div className="flex space-x-4">
              <div className='my-4 w-1/2'>
                <div id='firstName' className="border border-solid rounded-[5]">
                  <label className="px-2 block">First Name :</label>
                  <input
                    placeholder='First Name'
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input mt-1 p-2 w-full outline-none"
                    required
                  />
                </div>
                <div id="firstNameError" className='hidden font-semibold text-red-700'>Please enter valid First Name!</div>
              </div>

              <div className='my-4 w-1/2'>
                <div className="border border-solid rounded-[5]">
                  <label className="px-2 block">Last Name :</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input mt-1 p-2 w-full outline-none"
                  />
                </div>
                </div>
            </div>


            {/* ************ */}
            <div className="flex space-x-4">

              <div className='my-4 w-1/2'>
                <div id='email' className="border border-solid rounded-[5]">               
                  <label className="px-2 block">Email :</label>
                  <input
                    placeholder='Email'
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input mt-1 p-2 w-full outline-none"
                  />  
                </div>  
              </div>

              <div className='my-4 w-1/2'>
                <div id='phoneNumber' className="border border-solid rounded-[5]">
                  <label className="px-2 block">Phone Number :</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-input mt-1 p-2 w-full outline-none"
                  />
                </div>
                <div id="phoneNumberError" className='hidden font-semibold text-red-700'>Please enter valid Phone Number!</div>
              </div>
            </div>
            {/* ************ */}

            <div className="flex space-x-4">
              <div className="w-1/2 my-4 border border-solid rounded-[5]">
                <label className="px-2 block">Current Occupation :</label>
                <input
                  placeholder='Current Occupation'
                  type="text"
                  name="currentOccupation"
                  value={formData.currentOccupation}
                  onChange={handleChange}
                  className="form-input mt-1 p-2 w-full outline-none"
                />
              </div>

              <div className="w-1/2 my-4 border border-solid rounded-[5]">
                <label className="px-2 block">Designation :</label>
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={handleChange}
                  className="form-input mt-1 p-2 w-full outline-none"
                />
              </div>
            </div>
            {/* ************ */}

            {/* ************ */}

            <div className="flex space-x-4">
              <div className="w-1/2 my-4 border border-solid rounded-[5]">
                <label className="px-2 block">Company Name :</label>
                <input
                  placeholder='Company Name'
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="form-input mt-1 p-2 w-full outline-none"
                />
              </div>

              <div className="w-1/2 my-4 border border-solid rounded-[5]">
                <label className="px-2 block">Current Industry :</label>
                <input 
                  type="text"
                  name="currentIndustry"
                  placeholder="Industry Currently Working in :"
                  value={formData.currentIndustry}
                  onChange={handleChange}
                  className="form-input mt-1 p-2 w-full outline-none"
                />
              </div>
            </div>
            {/* ************ */}

            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={nextStep}
                className="bg-themecolor font-semibold text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            {/* Additional fields and questions for Step 2 */}
            <div className="flex space-x-4">
            <div className="w-1/2 my-4 border border-solid rounded-[5]">
              <label className="block px-2">Industry :</label>
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                value={formData.industry}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>
            <div className="w-1/2 my-4 border border-solid rounded-[5]">
              <label className="px-2 block">Location :</label>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>

            </div>

            <div className="flex space-x-4">
            <div className="w-1/2 my-4 border border-solid rounded-[5]">
              <label className="px-2 block">Type of Project :</label>
              <input
                type="text"
                name="projectType"
                placeholder="Type of Project"
                value={formData.projectType}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>

            <div className="w-1/2 my-4 border border-solid rounded-[5]">
              <label className="px-2 block">Investment Required (In Rupees) :</label>
              <input
                type="number"
                name="investmentRequired"
                placeholder="100000"
                value={formData.investmentRequired}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>
            </div>

            <h3 className='mt-10 mb-4 text-lg font-semibold font-lexend'> Expected Returns on the Project</h3>

            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">Annual Income/Yield (if Any)  :</label>
              <input
                type="text"
                name="annualIncome"
                placeholder="Please mention any recurring income/rental payouts expected"
                value={formData.annualIncome}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>

            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">Expected Payout Maturity :</label>
              <input
                type="text"
                name="expectedPayoutMaturity"
                placeholder="Please mention any expected Appreciation, payout that would be generated after the projected"
                value={formData.expectedPayoutMaturity}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>

            <div className="flex space-x-4">
            <div className="w-1/2 my-4 border border-solid rounded-[5]">
              <label className="px-2 block">Any Other expected income(If Any) :</label>
              <input
                type="number"
                name="otherExpectedIncome"
                placeholder="1000"
                value={formData.otherExpectedIncome}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>

            <div className="w-1/2 my-4 border border-solid rounded-[5]">
              <label className="px-2 block">Total Annualized Return (IRR) :</label>
              <input
                type="number"
                name="toatalAnnualizedReturn"
                placeholder="100000"
                value={formData.toatalAnnualizedReturn}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>
            </div>


            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="mr-4 font-semibold border-2 bg-white border border-themecolor text-themecolor px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-themecolor font-semibold text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            {/* Additional fields and questions for Step 3 */}
            
            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">Expertise Required for execution :</label>
              <textarea
                type="text"
                name="expertiseRequired"
                placeholder="Expertise Required for execution"
                value={formData.expertiseRequired}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none resize-y"
              />
            </div>

            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">Timeline for project completion/project duration :</label>
              <input
                type="text"
                name="projectDuration"
                placeholder="4 months"
                value={formData.projectDuration}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>

            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">Risks Involved in the project :</label>
              <textarea
                type="text"
                name="riskInvolved"
                placeholder="Risks Involved in the project"
                value={formData.riskInvolved}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>

            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">What are the blockers preventing you from executing the project on your own? :</label>
              <textarea
                type="text"
                name="blocker"
                placeholder="Type..."
                value={formData.blocker}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div>  

            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">If we start executing the project, what amount would you invest in it? :</label>
              <input
                type="number"
                name="yourInvestment"
                placeholder="10000"
                value={formData.yourInvestment}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div> 

            <div className="my-6 border border-solid rounded-[5]">
              <label className="px-2 block">Any Other Comments :</label>
              <textarea
                type="text"
                name="comment"
                placeholder="Any Other Comments"
                value={formData.comment}
                onChange={handleChange}
                className="form-input mt-1 w-full p-2 outline-none"
              />
            </div> 


            <div id='error-message' className='text-xl hidden text-center font-semibold text-red-700 font-lexend'>Please fill all Mandatory fields: firstName, Mobile Number etc. !!</div>

            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={prevStep}
                className="mr-4 bg-white border-2 font-semibold border border-themecolor text-themecolor px-4 py-2 rounded-md"
              >
                Previous
              </button>
              <button
                type="submit"
                className="bg-themecolor font-semibold text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
    </>
  );
};

export default InvestmentForm;
