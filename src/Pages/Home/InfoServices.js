import React from 'react';

const InfoServices = ({img, serviceTitle}) => {
    return (
        <div className="card w-50 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img className='h-20' src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{serviceTitle}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
       
        </div>
      </div>
      
    );
};

export default InfoServices;