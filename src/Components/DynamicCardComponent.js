import React from 'react';
import singleStroke from '../assets/images/single_stroke.svg';
// import singleStroke from '../../assets/images/concentric_circle.svg';


const DynamicCardComponent = ({ imageSrc, title, content }) => {
  return (
    <div className='my-10 md:hidden'>
      <img className="mx-16 w-10" src={imageSrc} alt="Strategies"/>
      <h2 className='mt-4 mx-16 font-overpass mt-4 font-black text-xl md:text-5xl text-themecolor'>{title}</h2>
      <img className="mx-16 mb-4 w-10" src={singleStroke} alt="singleStroke"/>
      <p className='mx-16 font-overpass'>{content}</p>
    </div>
  );
}

export default DynamicCardComponent;