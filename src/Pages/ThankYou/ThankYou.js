import React from 'react';
import Footer from '../../Components/Footer/Footer';

const ThankYou = () => {
  return (
    <>
    <h1 className="my-10 text-3xl text-center text-themecolor font-bold mb-4">Congratulations !!</h1>
    <div className="w-1/2 mx-auto text-center bg-white p-8 border border-gray-300 shadow-lg rounded-md my-8">
      <h1 className="text-2xl text-secondarythemecolor font-bold mb-4">Thank You!</h1>
      <p className="text-gray-600">We appreciate your interest. We will contact you soon!</p>
      
    </div>
<Footer/>
    </>
  );
};

export default ThankYou;
