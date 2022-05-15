import React from 'react';
import logo2 from '../../assets/images/cavity.png';
import logo1 from '../../assets/images/fluoride.png';
import baby from '../../assets/images/treatment.png';
import logo3 from '../../assets/images/whitening.png';
import InfoServices from './InfoServices';

const Services = () => {
    return (
       <div className='my-28'>
          <div className='text-center'>
          <h4 className='text-xl text-primary font-bold'>OUR SERVICES </h4>
           <h2 className='text-4xl'>Services We Provide</h2>
          </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5     pt-24'>
            <InfoServices img={logo1} serviceTitle="Fluoride Treatment"></InfoServices>
            <InfoServices img={logo2} serviceTitle="Cavity Filling"></InfoServices>
            <InfoServices img={logo3} serviceTitle="Teeth Whitening"></InfoServices>
        </div>
        <div className='mt-20'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure className='flex-1'><img  src={baby} alt="Album"/></figure>
  <div className="card-body flex-1 justify-center  ">
    <h2 className="card-title text-4xl">Exceptional Dental Care, on Your Terms</h2>
    <h4>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</h4>
    <div className="card-actions mt-10">
          <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
        
       </div>
    );
};

export default Services;