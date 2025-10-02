import React from 'react';
import { useNavigate } from 'react-router';

const PlantCard = ({plant}) => {
    const {image,name,price,id} = plant;
    const navigate = useNavigate();
    // console.log(plant);
    return (
<div className="card bg-base w-96 mx-auto shadow-sm">
  <figure className='h-52'>
    <img
    className='h-full object-cover w-full'
      src={image}
      alt="Plant" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h2>Price: {price}</h2>
   <div className='card-actions justify-start'>
          {/* <Link
            state={plant}
            to={`/plant-details/${id}`}
            className='btn btn-primary'
          >
            View Details
          </Link> */}
          <button
            onClick={() => navigate(`/plant-details/${id}`, { state: plant })}
            className='btn btn-primary'
          >
            View Details
          </button>
        </div>
  </div>
</div>
    );
};

export default PlantCard;