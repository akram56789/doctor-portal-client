import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Customar from './Customar';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <MakeAppointment></MakeAppointment>
           <Customar></Customar>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;