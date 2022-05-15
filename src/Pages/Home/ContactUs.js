import React from 'react';
import Button from '../Shared/Button';
 

const ContactUs = () => {
    return (
     <section className='mt-28'>
       
        <div className="card   bg-base-100 shadow-xl bg-[url('/src/assets/images/appointment.png')] ">
  
  <div className="card-body">
  <div className='text-center'>
             <h4 className='text-xl text-secondary font-bold'> Contact Us</h4>
             <h3 className='text-white text-4xl' > Stay connected with us</h3>
         </div>
  <div className="hero">
        <div className="hero-content ">
       
          <div className="card flex justify-center   shadow-2xl ">
            <div className="card-body w-80  lg:w-96  ">
              <div className="form-control">
               
                <input type="text" placeholder="email address" className="input input-bordered" />
              </div>
              <div className="form-control ">
                
                <input type="text" placeholder="subject" className="input input-bordered" />
               
              </div>
              <div className="form-control ">
                
                <input type="text" placeholder="Your message" className="input input-bordered h-32" />
               
              </div>
            <div className='flex justify-center mt-4'>
             <Button>submit</Button>
            </div>
              
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
     </section>
    );
};

export default ContactUs;