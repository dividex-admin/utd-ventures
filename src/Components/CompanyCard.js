import React from 'react';

const CompanyCard = ({ logoSrc, companyInfo }) => {
  return (
    <div className="my-6 mx-auto border-s-slate-700 relative w-56 h-36 overflow-hidden shadow-md">
      <img 
        src={logoSrc} 
        // alt={companyName} 
        className="w-full px-3 h-full object-fill transition-opacity duration-500 ease-in-out hover:opacity-0"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100 hover:bg-blue-300 ">
        <div className="text-center">
          <p className="text-sm p-2">{companyInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
