import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';

import Footer from '../Components/Footer';
import LoadinngSpinner from '../Components/LoadinngSpinner';
import { CartContext } from '../Providers/CartContext';



const RootLayout = () => {
    const [cart,setCart] = useState([]);
    const navigation = useNavigation();
    return (
        
       <CartContext value={{cart,setCart}}>
         <Navbar></Navbar>
       {
        navigation.state === 'loading' ? <LoadinngSpinner></LoadinngSpinner>: <main className='min-h-[calc(100vh-285px)]'>
            <Outlet></Outlet>
        </main>
       }
        <Footer></Footer>
       </CartContext>
       
    );
};

export default RootLayout;