import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../../../images/favicon.png'
import { FaFacebook,FaInstagram,FaYoutube,FaCity,FaTwitter,FaPhone,FaEnvelope } from "react-icons/fa";
import './Footer.css'


const Footer = () => (

    <div className='mt-5 footer-container'>

        <footer className='text-center text-lg-start text-dark'>

            <div className='container p-4'>

                <div className='row my-4'>

                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>

                        <div className='rounded-circle bg-light shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto foot-img'>
                            <img src={logo} height="40" alt=""
                                loading="lazy" />
                        </div>

                        <p className='text-center'>You can explore the best homemade food here</p>

                        <ul className='list-unstyled d-flex flex-row justify-content-center'>
                            <li>
                                <a className='footer-icon' href='https://www.facebook.com'>
                                    <FaFacebook></FaFacebook>
                                </a>
                            </li>
                            <li>
                                <a className='footer-icon' href='https://www.instagram.com/cheffythings__'>
                                    {/* <i className='fab fa-instagram'></i> */}
                                    <FaInstagram></FaInstagram>
                                </a>
                            </li>
                            <li>
                                <a className='footer-icon' href='https://www.youtube.com'>
                                    <FaYoutube></FaYoutube>
                                </a>
                            </li>
                    
                            <li>
                                <a className='footer-icon' href='https://www.twitter.com'>
                                    <FaTwitter></FaTwitter>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                        <h5 className='mb-3 ms-3'>Our Services</h5>

                        <ul className='list-unstyled'>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Frozen Snacks</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Chicken Biriyani</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Kabab</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Set Meal</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Cake</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Chicken Korma</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark'><i className='fas fa-paw pe-3'></i>Spicy Pasta</a>
                            </li>
                        </ul>
                    </div>



                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-4 ms-2'>Legal</h5>

                        <ul className='list-unstyled'>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark fas fa-paw pe-3'>Terms of use</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark fas fa-paw pe-3'>Privacy Policy</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#!" className='text-dark fas fa-paw pe-3'>Cookie Policy</a>
                            </li>
                            
                        </ul>
                    </div>

                    <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-4'>Contact  us</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <p className='d-flex'><FaCity className='mt-1 me-1' ></FaCity>Chawbazar, Chittagong</p>
                            </li>
                            <li>
                                <p className='d-flex'><FaPhone  className='mt-1 me-1'></FaPhone> +8801521227960</p>
                            </li>
                            <li>
                                <p className='d-flex'><FaEnvelope className='mt-1 me-1'></FaEnvelope>cheffythings@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center p-3'>
                © 2022 Copyright: cheffythings.com
            </div>

        </footer>

    </div>

);

export default Footer;