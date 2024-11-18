import React from 'react';
import Carousel from '../Carousel/Carousel';
import Professional from '../Professional/Professional';
import Subscribe from '../Subscribe/Subscribe';
import Testimonials from './Testimonials/Testimonials';
import Technician from '../Technician/Technician';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Professional />
            <Services />
            <Technician />
            <Subscribe />
            <Testimonials />
        </div>
    );
};

export default Home;