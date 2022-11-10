
import React,{useContext, useEffect, useState} from 'react';
import { Link, useLoaderData,useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import { FaUser,FaLock,FaGoogle,FaGithub,FaFacebook,FaEnvelope,FaImage,FaSadTear } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import './SingleServicesDetails.css';
import { Spinner } from 'react-bootstrap';
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

        // navigate('/Login');

          alert('You have to Log in First!',)
          
         
         }
       
  
    }
    

    
  
    const {user,loading} = useContext(AuthContext);
    const[review,setReview] = useState([]);

    

    useEffect(()=>{
        fetch(`https://food-app-server.vercel.app/review?service=${_id}`)
        .then(res => res.json())
        .then(data => setReview(data));
    },[_id])
   

    console.log(review);
  
    if(loading){
      return <Spinner animation='border' variant='primary'/>
  }




    return (
        <div>
            <div className='card-container mx-auto my-5'>

            <h3>{title}</h3>
              <Card> 
                      <div className='imgcontainer container '>
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
                   <Button onClick={handleNavigate} className='access-btn1'>Add Review</Button>
                   <p>Click here to log in: <Link to={'/Login'}>log in</Link></p>
                 </Card.Body>
            </Card>
        </div>
        <div className='m-5 p-5 fs-2 Service-title-container'>
            {
                review.length?<h4 className='fs-2'>Reviews of Customers</h4> : <div className='m-5 p-5'>No Reviews were Added..<FaSadTear className='container'></FaSadTear></div>
            }
           </div>

       
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
        
          
        

        


        </div>         
    
    );
};

export default SingleServicesDetails;