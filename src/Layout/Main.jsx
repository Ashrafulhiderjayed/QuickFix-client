import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopNav from '../Pages/HomePage/TopNav/TopNav';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();

    const removeNavFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div className='bg-white'>
            { removeNavFooter || <TopNav></TopNav>}
            { removeNavFooter || <Navbar></Navbar>}
            <Outlet />
            { removeNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;