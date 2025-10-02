import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useLoaderData } from 'react-router';
import PlantCard from '../Components/PlantCard';

const Home = () => {
    const {plants} = useLoaderData();
    // console.log(plants);
    return (
        <div className='flex justify-center'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5'>
            {
            plants.map(plant => <PlantCard key={plant.id} plant={plant}></PlantCard>)
         }
         </div>
        </div>
    );
};

export default Home;