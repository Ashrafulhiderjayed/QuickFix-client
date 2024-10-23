import React from 'react';
import Carousel from '../Carousel/Carousel';
import Professional from '../Professional/Professional';
import Subscribe from '../Subscribe/Subscribe';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Professional />
            <Subscribe />
            <Testimonials />
        </div>
    );
};

export default Home;