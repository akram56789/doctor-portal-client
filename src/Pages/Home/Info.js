import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCart from './InfoCart';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  text-white'>
            <InfoCart cartTitle="Opening Hours"
             bgClass="bg-gradient-to-r from-secondary to-primary" 
             img={clock}>

             </InfoCart>
            <InfoCart cartTitle="Our Locations" 
            bgClass="bg-accent" 
            img={marker}>

            </InfoCart>
            <InfoCart cartTitle="Contact Us"
             bgClass="bg-gradient-to-r from-secondary to-primary" 
             img={phone}>

             </InfoCart>
        </div>

    );
};

export default Info;