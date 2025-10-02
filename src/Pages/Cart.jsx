import React, { useContext } from 'react';
import { CartContext } from '../Providers/CartContext';


const Cart = () => {
    const {cart,setCart} = useContext(CartContext);

    return (
        <div className='text-center'>
           <div className=' flex flex-col justify-center md:flex-row mt-10 gap-5 mx-auto'>
            {
                cart.map(plant => 
                <div key={plant.id} className='card bg-amber-50 shadow-lg p-5 rounded-xl'>
                    <h2 className='font-bold text-2xl'>{plant.name}</h2>
                    <p className='text-lg'> Price: {plant.price} </p>
                </div>
                )
            }
           </div>
           
        </div>
    );
};

export default Cart;