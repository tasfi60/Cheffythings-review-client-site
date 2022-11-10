import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { FaUser,FaEdit,FaTrash,FaSadTear} from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';


const Myreview = () => {
    useTitle('My Review')
       
     const {user,logOut} = useContext(AuthContext);
     const [myreview, setMyreview] = useState([]);

     const navigate = useNavigate();

    function handleNavigate(r) {
        navigate(`/Updatereview/${r}`);
    }
     
       
     useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('cheffytoken')}`
            }

        })
              
        .then(res => {
            if(res.status === 401 || res.status === 403){
                logOut()
            }
            return res.json()
        })
        .then(data => 
            
            {
                if(user.email)
                {
                    const reviews = data.filter(rev => rev.email === user.email);
                    setMyreview(reviews);
                }
            }
            )

                    
           
    },[user?.email])

    

    const handleDelete = r =>{
          
        const agree = window.confirm(`Are you sure you want to delete?`)
        // console.log(r);
         
        if(agree){
            fetch(`http://localhost:5000/review/${r}`,{
                method: 'DELETE'

            })
            .then(res => res.json())
            .then(data => 
                {
                    if(data.deletedCount > 0)
                    {
                        const remainingreview = myreview.filter(rev => rev._id !== r);
                        setMyreview(remainingreview);
                        alert('Deletation Successful!');
                    }
                }
                )

        }
    }
  
      
    return (
        <div>
            <div className='m-5 p-5 fs-2 Service-title-container'>
            {
                myreview.length?<h4 className='fs-2'>Reviews of {user?.displayName}</h4> : <div className='m-5 p-5'>No Reviews were Added..<FaSadTear className='container'></FaSadTear></div>
            }
           </div>
            
        {
            myreview.map(r => 
                 
                

                 
                <div className='review-container mx-auto  my-5'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
            {
                        user?.photoURL?
                        <Image data-toggle="tooltip" title={user?.displayName} className='rounded-circle w-75' 
                              src={user?.photoURL}>
                        </Image> 
                        : <FaUser></FaUser>                      
              }

            </div>
            
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title fs-4 ms-5 mt-3 container'>{r.customer}</h5>
                <h6 className='fs-5 me-5 mt-3'>Service: {r.ServiceName}</h6>
                <p className='card-text me-5 pe-5 container'>{r.message}</p>
                <p className='card-text ms-5 ps-5 d-flex'><FaEdit onClick={() => handleNavigate(r._id)} ></FaEdit><FaTrash onClick={() => handleDelete(r._id)} className='ms-3'></FaTrash></p>
              </div>
            </div>
          </div>
        </div>
                
                
                
                
                
                
            )

        }

        
                        
    
     </div>
    );
};

export default Myreview;