import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Customar from './Customar';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <MakeAppointment></MakeAppointment>
           <Customar></Customar>
           <ContactUs></ContactUs>
           <Footer></Footer>
      
        </div>
    );
};

export default Home;