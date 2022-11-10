import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Servicedetails from '../Servicedetails/Servicedetails';
import './Services.css';
import { Link,useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Services = () => {
  useTitle('Services')
    const services = useLoaderData();
    // console.log(services);
    const {loading} = useContext(AuthContext);

    if(loading){
        return <Spinner animation='border' variant='primary'/>
    }

   
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