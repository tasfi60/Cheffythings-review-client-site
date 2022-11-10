import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Spinner } from 'react-bootstrap';
import useTitle from '../hooks/useTitle';

const Servicedetails = ({sname}) => {
    useTitle('Service Details')
    
    
   
    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/services/${sname?._id}`);
    }

    const {loading} = useContext(AuthContext);

    if(loading){
        return <Spinner animation='border' variant='primary'/>
    }

    return (

        <div>
            <div className='grid-tepmplate'>
            <PhotoProvider>
            <PhotoView src={sname?.image}>
               <img src={sname?.image} alt="" />
            </PhotoView>
            </PhotoProvider>
             <h5><b>{sname?.name}</b></h5>
             <small>{sname?.description}</small>
             <p>Price: {sname?.Price}</p>
             <button onClick={handleNavigate} className='w-50 btn'>
             View Details
             </button>
            
             </div>
            
        </div>
    );
};

export default Servicedetails;