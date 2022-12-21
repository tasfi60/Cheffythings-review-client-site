/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../../images/favicon.png'
import { FaFacebook,FaInstagram,FaYoutube,FaCity,FaTwitter,FaPhone,FaEnvelope } from "react-icons/fa";
import './Subscribe.css'


const Footer = () => (

    <div className='mt-5 s-container container rounded'>

        <footer className='text-center text-lg-start text-dark container'>

            <div className='container p-4'>

                <div className='row my-4 container'>

                    
                    <div className='col-lg-9 col-md-6 mb-4 mb-md-0 container'>

                        <div className='mb-4'>
                            <h2>Be the first to know about the latest deals,new services & more!</h2>
                            <input type="email" name="" id="" className='w-75 text-dark bg-light' placeholder='Enter Email'/>
                            <button type="submit" className='btn mt-4'>Subscribe</button>
                        </div>

                       
                    </div>

                    



                    

           </div>
            </div>

        </footer>

    </div>

);

export default Footer;