import React, { useContext, useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FaUser,FaLock,FaGoogle,FaGithub,FaFacebook,FaEnvelope,FaImage } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review')
      
     const {user} = useContext(AuthContext);

     const update = useLoaderData();
     const [ review, setReview] = useState(update);

     const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);

     }

     const handleUpdateReview = event =>{
        event.preventDefault();
        console.log(review);
        fetch(`https://food-app-server.vercel.app/review/${update._id}`,{
              method: 'PUT',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('Review Updated!')
                console.log(data);
                event.target.reset();
            }
               
        })
    }
        

    return (
        <div className='container'>
        <h3 className='Service-title-container mt-5 mb-5'>Update Review here</h3>
        <div className='container'>
        <div className='review-section container w-50'>
        
            <div className='review-container mb-3'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
            {         
                        update?.photo?
                        <Image data-toggle="tooltip" title={update?.displayName} className='rounded-circle w-75' 
                              src={update?.photo}>
                        </Image> 
                        : <FaUser></FaUser>                      
            }

            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title ms-5 mt-3'>{update?.customer}</h5>
                <p className='card-text me-5 pe-5'>{update?.message}</p>
                <p className='card-text'><small className='text-muted'>Posted on  {update?.date}</small></p>
              </div>
            </div>
          </div>
        </div>
       
            
      </div>
      <Form onSubmit={handleUpdateReview } className=" container w-75  d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light register-box">

                        <div className="text-center">
                            <h5 className="text-dark fs-6 mt-3">Fill the Review Form</h5>
                        </div>
                            <div className="p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="text" onChange={handleInputChange} className="form-control" defaultValue={update.customer} name="name" placeholder="Full Name" />
                                </div>
                        
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="email" onChange={handleInputChange} className="form-control" name="email" defaultValue={update.email} placeholder="Email" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <textarea class="form-control" onChange={handleInputChange} name="message" defaultValue={update.message} placeholder="Update review here" id="floatingTextarea" required></textarea>
                                    {/* <input type="text" className="form-control" name="message" placeholder="text" required /> */}
                                </div>

                               

                                <Button variant="primary" className="btn-xl fw-bold" type="submit">Update</Button>
                                
                                <hr />
                            </div>
                        </Form>
            </div>
      </div>
    );
};

export default UpdateReview;