import React from 'react';
import Button from '../Shared/Button';
 

const ContactUs = () => {
    return (
     <section className='mt-28'>
       
        <div class="card   bg-base-100 shadow-xl bg-[url('/src/assets/images/appointment.png')] ">
  
  <div class="card-body">
  <div className='text-center'>
             <h4 className='text-xl text-primary font-bold'> Contact Us</h4>
             <h3 className='text-white text-4xl' > Stay connected with us</h3>
         </div>
  <div class="hero">
        <div class="hero-content ">
       
          <div class="card flex justify-center   shadow-2xl ">
            <div class="card-body   w-80  lg:w-96  ">
              <div class="form-control">
               
                <input type="text" placeholder="email address" class="input input-bordered" />
              </div>
              <div class="form-control ">
                
                <input type="text" placeholder="subject" class="input input-bordered" />
               
              </div>
              <div class="form-control ">
                
                <input type="text" placeholder="Your message" class="input input-bordered h-32" />
               
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