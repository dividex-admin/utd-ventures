import React from 'react';
import { Link } from 'react-router-dom';

const FooterCard = ({ icon, title, subTtitle, type }) => {
  return (
    <div className='flex flex-col flex-1 font-manrope'>
      <div className='flex'>
      <img className='w-4 mr-2' src={icon} />
      <h1 className=' font-semibold font-lexend'>
        {title}
      </h1>
      </div>
      { type==='link' && <p className='text-sm font-manrope'><Link to={`mailto:${subTtitle}`}>{subTtitle}</Link></p> }
      { type==='tel' && <p className='text-sm font-manrope'><Link to={`tel:${subTtitle}`}>{subTtitle}</Link></p> }
      {type === undefined && <p className='text-sm font-manrope'>{subTtitle}</p>}
    </div>
  );
};

export default FooterCard;
