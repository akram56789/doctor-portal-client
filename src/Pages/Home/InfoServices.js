import React from 'react';

const InfoServices = ({img, serviceTitle}) => {
    return (
        <div class="card w-50 bg-base-100 shadow-xl ">
        <figure class="px-10 pt-10">
          <img className='h-20' src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{serviceTitle}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
       
        </div>
      </div>
      
    );
};

export default InfoServices;