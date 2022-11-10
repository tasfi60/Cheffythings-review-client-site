import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';


const ReviewForm = () => {
    useTitle('Review Form')

    const{user} = useContext(AuthContext);
    const {name,_id,Price} = useLoaderData();

    const handleReview = event =>{
            event.preventDefault();
            const form = event.target;
            const cname = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const date = form.date.value;
            const photo = user.photoURL;

            const review = {
                service: _id,
                ServiceName: name,
                Price: Price,
                date: date,
                customer: cname,
                message,
                email,
                photo

            }

            fetch('https://food-app-server.vercel.app/review',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        form.reset();
                    }
                })
                .catch(error => console.error(error));

    }

    return (
        <div>
            
                  
            <Form onSubmit={handleReview } className="d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light register-box">
            <h4>Service: {name}</h4>
            <h6>Price: {Price}</h6>
                        <div className="text-center">
                            <h5 className="text-dark fs-6 mt-3">Fill the Review Form</h5>
                        </div>
                            <div className="p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" />
                                </div>
                        
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="text" className="form-control" name="date" placeholder="date" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <textarea class="form-control" name="message"  placeholder="Leave a review here" id="floatingTextarea" required></textarea>
                                    {/* <input type="text" className="form-control" name="message" placeholder="text" required /> */}
                                </div>

                               

                                <Button variant="primary" className="btn-xl fw-bold" type="submit">Submit</Button>
                                
                                <hr />
                            </div>
                        </Form>
            
        </div>
    );
};

export default ReviewForm;