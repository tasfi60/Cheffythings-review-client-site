import React from 'react';
import Button from 'react-bootstrap/Button';
import useTitle from '../hooks/useTitle';
import Form from 'react-bootstrap/Form';

const AddService = () => {
    useTitle('Add Service')
    // const {image,name,description,Price}= cname;

    const handleService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.photoURL.value;
        const description = form.description.value;
        const Price = form.Price.value;

        const review = {
            name: name,
            Price: Price,
            image: image,
            description: description

        }

        fetch('https://food-app-server.vercel.app/services',{
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
                    alert('Service Added Successfully!')
                }
            })
            .catch(error => console.error(error));

}

    return (
        <div>

       <Form onSubmit={ handleService} className="d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5  border shadow-lg rounded-3 bg-light register-box">

                        <div className="text-center">
                            <h5 className="text-dark fs-6 mt-3">Add your own Service</h5>
                        </div>
                            <div className="p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="text" className="form-control" name="name" placeholder="Service Name" />
                                </div>
                        
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="text" className="form-control" name="photoURL" placeholder="photo URL" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <input type="text" className="form-control" name="Price" placeholder="price" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"></span>
                                    <textarea class="form-control" name="description"  placeholder="Leave a description here" id="floatingTextarea" required></textarea>
                                    {/* <input type="text" className="form-control" name="message" placeholder="text" required /> */}
                                </div>

                               

                                <Button variant="primary" className="btn-xl fw-bold" type="submit">Submit</Button>
                                
                                <hr />
                            </div>
                        </Form>
            
        </div>
    );
};

export default AddService;