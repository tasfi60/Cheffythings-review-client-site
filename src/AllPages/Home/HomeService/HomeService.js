import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {  useNavigate } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const HomeService = ({service}) => {
   const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/services/${service._id}`);
    }

    return (

            <div>
            <div className='grid-tepmplate'>
            <PhotoProvider>
            <PhotoView src={service?.image}>
               <img src={service?.image} alt="" />
            </PhotoView>
            </PhotoProvider>
             {/* <img src={service?.image} alt="" /> */}
             <h5><b>{service?.name}</b></h5>
             <small>{service?.description}</small>
             <p>Price: {service?.Price}</p>
             <button onClick={handleNavigate} className='w-50 btn'>
                View Details
             </button>
            
             </div>
            
        </div>
            
        
    );
};

export default HomeService;