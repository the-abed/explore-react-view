import React, { useContext, useState } from "react";
import { useLoaderData, useLocation, useSearchParams } from "react-router";
import { CartContext } from "../Providers/CartContext";

const PlantDetails = () => {
    const {cart,setCart} = useContext(CartContext);
      
    const location = useLocation();

    // console.log(location);
    // const data = useLoaderData();
     const {image,name,description, price,category} = location.state;
    // console.log(data.plants)
   
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div> 
      <h1 className="text-5xl font-bold">{name}</h1>
      <h1 className="text-3xl font-bold mt-5">Category: {category}</h1>
      <p className="py-6">
        {description}
      </p>
      <h2 className="text-lg font-bold py-3">Price: {price}</h2>
      <button
      onClick={()=>setCart(prev => [...prev,location?.state])}
       className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default PlantDetails;