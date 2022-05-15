import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({date, setDate}) => {
   
    return (
        <div class="hero min-h-screen bg-[url('/src/assets/images/bg.png')]  ">
            <div class="hero-content flex-col lg:flex-row-reverse gap-16 ">
              <div>
              <img src={chair} class=" w-96 rounded-lg shadow-2xl" />
              </div>
                <div className='w-80'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;