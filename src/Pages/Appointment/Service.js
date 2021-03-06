import React from 'react';

const Service = ({ service, setTreatment }) => {

  const { name, slots } = service
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center ">
        <h2 className="card-title justify-center text-secondary">{name}</h2>
        <p >{
          slots.length > 0
            ? <span>{slots[0]}</span>
            : <span className='text-red-500'>Try another day</span>

        }</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal-6"
            disabled={slots.length === 0}
            onClick={() => setTreatment(service)}
            className="btn btn-sm btn-primary  bg-gradient-to-r from-secondary to-primary text-white">BOOK APPOINTMENT</label>

        </div>
      </div>
    </div>
  );
};

export default Service;