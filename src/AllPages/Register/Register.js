import React,{useContext,useState} from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaUser,FaLock,FaGoogle,FaGithub,FaFacebook,FaEnvelope,FaImage } from "react-icons/fa";
import { Link, useNavigate,useLocation } from 'react-router-dom';
import './Register.css';
import useTitle from '../hooks/useTitle';

const Register = () => {
    useTitle('Register')
       
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
 


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                // toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }


    return (
        <div className='container mb-1 p-5'>
        <form onSubmit={handleSubmit} className='form-container-reg p-5'>
            <h3>Register Here</h3>
            
            <label for="username" className='d-flex align-items-center justify-content-center'><FaUser className='me-1 mb-1'></FaUser>Username</label>
            <input type="text" name='name' placeholder="Name"  required/>

            <label for="email" className='d-flex align-items-center justify-content-center'><FaEnvelope className='me-1 mb-1'></FaEnvelope>Email</label>
            <input type="email" name='email' placeholder="Email"  required/>
     
            <label for="password" className='d-flex align-items-center justify-content-center'><FaLock className='me-1 mb-1'></FaLock>Password</label>
            <input type="password"  name='password' placeholder="Password" required/>

            <label for="photo" className='d-flex align-items-center justify-content-center'><FaImage className='me-1 mb-1'></FaImage>Photo URL</label>
            <input type="text"  name='photoURL' placeholder="Photo URL" required/>
     
            <button className='login-btn fs-5' type="submit">Sign Up</button>
            <p className='text-danger'>{error}</p>
    
            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0 me-3 mt-3">Already have an account?</p>
                   <Link to='/Login'><button variant="info" className=' mt-3 bg-warning'>Log in here</button></Link>
                </div>
        </form>
        </div>
    );
};

export default Register;