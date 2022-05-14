import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl  bg-[url('/src/assets/images/appointment.png')]">
  <figure className='flex-1'><img src={doctor}  alt="Album"/></figure>
  <div class="card-body flex-1 text-white">
      <h4 className='text-primary '> Appointment
      </h4>
    <h2 class="card-title text-4xl">Make an appointment Today</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
    <div class="card-actions">
       <Button></Button>
    </div>
  </div>
</div>
    );
};

export default MakeAppointment;