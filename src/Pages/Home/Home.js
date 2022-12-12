import React from 'react';
import Services from '../Services/Services';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Testimonials from './Testimonials';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Treatment/>
            <Appointment/>
            <Testimonials/>
        </div>
    );
};

export default Home;