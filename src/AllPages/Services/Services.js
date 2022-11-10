import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Servicedetails from '../Servicedetails/Servicedetails';
import HomeService from '../Home/HomeService/HomeService';
import './Services.css';
import { Link,useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Services = () => {
  useTitle('Services')
    const services = useLoaderData();
    // console.log(services);

   
    return (
        <div className='course-container'>
        <h5 className='mt-4 ms-1 fs-3 fw-bold ps-5 shadow bg-color'>All available Services</h5>
      <Row>
        <Col sm={12} >
            <div className='topics-area my-5 container'>
 
            
            {

            
               services.map(sname => <Servicedetails key={sname._id} sname={sname} ></Servicedetails>)

            }
           
           


            </div>
        </Col>
      </Row>
    </div>
    );
};

export default Services;