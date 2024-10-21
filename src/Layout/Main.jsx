import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from '../Pages/HomePage/TopNav/TopNav';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();

    const removeNavFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            { removeNavFooter || <TopNav></TopNav>}
            { removeNavFooter || <Navbar></Navbar>}
            <span>ksdjlajfd</span>
            <Outlet />
            {/* { removeNavFooter || <Footer></Footer>} */}
            <div>Footer</div>
            <span>ksdjlajfd</span>
        </div>
    );
};

export default Main;