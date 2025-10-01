import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <main className='min-h-[calc(100vh-285px)]'>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
        </>
    );
};

export default RootLayout;