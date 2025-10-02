import React from 'react';
import { PropagateLoader } from 'react-spinners';

const LoadinngSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-285px)]'>
            <PropagateLoader></PropagateLoader>
        </div>
    );
};

export default LoadinngSpinner;