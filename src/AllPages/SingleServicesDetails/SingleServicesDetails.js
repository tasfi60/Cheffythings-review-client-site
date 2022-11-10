
import React,{useContext, useEffect, useState} from 'react';
import { Link, useLoaderData,useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import { FaUser,FaLock,FaGoogle,FaGithub,FaFacebook,FaEnvelope,FaImage } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Alert from 'react-bootstrap/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SingleServicesDetails.css';
import useTitle from '../hooks/useTitle';




const SingleServicesDetails = () => {
  useTitle('Single Service')
    const {image,img,title,name,quotes,description1,description,Price,_id} = useLoaderData();
    


    const navigate = useNavigate();

    function handleNavigate() {
      if( user?.uid)
      {
        navigate(`/Review/${_id}`);
      }
      else
      {

        navigate('/Login');

          //  toast message displayed
     
             
             
                //  toast(`You have to Login First! Click Here:{}`, {
                //      position: toast.POSITION.TOP_CENTER,
                //      className:'w-100 p-5 fw-bold bg-light'
                //  });
     
             
     
             
         
         }
       
  
    }
  
    const {user} = useContext(AuthContext);
    const[review,setReview] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/review?service=${_id}`)
        .then(res => res.json())
        .then(data => setReview(data));
    },[_id])
   

    console.log(review);
  





    return (
        <div>
            <div className='card-container mx-auto my-5'>

            <h3>{title}</h3>
              <Card> 
                      <div className='img-container container '>
                      <Card.Img variant='top'  className='card-img' src={image} />
                      <Card.Img variant='top'  className='card-img' src={img} />
                      </div>
                      
                    <Card.Body className='bg-color'>
                   <Card.Title className='mx-auto'><b>{name}</b></Card.Title>
                   <Card.Text>
                       {description1}
                   </Card.Text>
            
                   <Card.Title><b>{quotes}</b></Card.Title>
                   <Card.Text>
                       {description}
                  </Card.Text>
                  
                   <Card.Title><b>Price: {Price}</b></Card.Title>
                   <Button className='access-btn1'>Get Premium Access</Button>
                 </Card.Body>
            </Card>
        </div>

        <h3 className='Service-title-container'>Customer Review</h3>
        <div className='review-section container mt-5'>
        {
          review.map(R =>
            <div className='review-container mx-auto  mb-3'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
            {         
                        R.photo?
                        <Image data-toggle="tooltip" title={R?.displayName} className='rounded-circle w-75' 
                              src={R.photo}>
                        </Image> 
                        : <FaUser></FaUser>                      
            }

            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title ms-5 mt-3'>{R.customer}</h5>
                <p className='card-text me-5 pe-5'>{R.message}</p>
                <p className='card-text'><small className='text-muted'>Posted on  {R.date}</small></p>
              </div>
            </div>
          </div>
        </div>
        )
        }
            
      </div>
        
          
        

        
<div className='Service-btn-container container'>
            <button onClick={handleNavigate} className='border  border-1 border-warning rounded'>
             Add Review
             </button>
             
                   </div>

        </div>         
    
    );
};

export default SingleServicesDetails;