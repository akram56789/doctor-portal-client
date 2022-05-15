import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (


        <div className="card lg:card-side bg-base-100 shadow-xl  bg-[url('/src/assets/images/appointment.png')]">
            <figure className='flex-1'><img className='hidden lg:block'   src={doctor} alt="Album" /></figure>
            <div className="card-body flex-1 justify-center  text-white">
                <h4 className='text-primary '> Appointment
                </h4>
                <h2 className="card-title text-4xl">Make an appointment Today</h2>
                <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h4>
                <div className="card-actions mt-4">
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>

    );
};

export default MakeAppointment;