import React, { useContext, useState } from 'react';
import { FaUser,FaLock,FaGoogle,FaGithub,FaFacebook } from "react-icons/fa";
import { Link, useNavigate,useLocation, json } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import {AuthContext}  from '../../Context/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
import './Login.css';
import useTitle from '../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const {providerLogin,signIn,setLoading,setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error , setError] = useState('') ;
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const handleGithubSignIn = () =>{

      providerLogin(githubProvider)
      .then(result =>{
          const user = result.user;
          console.log(user);
          setUser(user);
          navigate(from, {replace:true});

      })
      .catch(error => console.error(error))

  }


    

    const handleGoogleSignIn = () =>{

        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user);
            navigate(from, {replace:true});

        })
        .catch(error => console.error(error))

    }


   
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
          .then(result => {
              const user = result.user;
              setUser(user);
              console.log(user);
              form.reset();
              setError('');

              const currentUser = {
                email: user.email
              }

              console.log(currentUser);

              fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
              })
              .then(res => res.json())
              .then(data =>{
                console.log(data);
                localStorage.setItem('cheffytoken',data.token);
                navigate(from, {replace: true});
              });
              
               
         })
          .catch(error => {
              console.error(error)
              setError(error.message);
          })
          .finally(() => {
              setLoading(false);
              
          })
  }

    return (
        <div className='container mb-1 p-5'>
    <form onSubmit={handleSubmit} className='form-container p-5'>
        <h3 className='mt-5'>Login Here</h3>
        
        <label for="username" className='d-flex align-items-center justify-content-center'><FaUser className='me-1'></FaUser> Username</label>
        <input type="email" name='email'  placeholder="Email"  required/>
 
        <label for="password" className='d-flex align-items-center justify-content-center'><FaLock className='me-1'></FaLock>Password</label>
        <input type="password"  name='password' placeholder="Password" required/>
 
        <button className='login-btn fs-5'>Log In</button>
        <p className='text-danger'>{error}</p>

        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0 me-3 mt-3">Don't have an account?</p>
               <Link to='/Register'><button variant="info" className=' mt-3 bg-warning'>Create Now</button></Link>
            </div>
        <div className='social'>
          <div onClick={handleGoogleSignIn} className=' mx-3'><FaGoogle className='ms-3'></FaGoogle><p className='s-icon'>Google</p></div>
          <div className='mx-3 mb-5 fb'><FaFacebook className='ms-2'></FaFacebook><p className='s-icon'>Facebook</p></div>
          <div  onClick={handleGithubSignIn} className=' mx-3'><FaGithub className='ms-3'></FaGithub><p className='s-icon'>Github</p></div>
          {/* <div className='go mb-5'><FaFacebook className='me-1' ></FaFacebook>Facebook</div>
          <div className='go'><FaGithub className='me-1'></FaGithub>Github</div> */}
        </div>
    </form>
    </div>
    );
};

export default Login;