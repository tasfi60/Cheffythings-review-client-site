import React from 'react';
import logo from '../../../images/favicon.png';
import {AnimatedOnScroll,AnimationOnScroll} from "react-animated-css-onscroll";
import ContactsIcon from '@mui/icons-material/Contacts';
import './Aboutme.css'

const Aboutme = () => {
    return (
        <div className='my-5 font-style text-dark about-box container'>
           <div className=''>
           <div class="container my-5 py-5">
      <h1 class=" weight-800 title font-style fs-1 animated fadeInUp ease-out-circ d-1 a-2 animate-charcter font">Why I have started this?</h1>
      <AnimatedOnScroll animationIn="bounceInRight" style={{marginTop:"80px",color:"green"}}>
      <p class="text-dark lead font font-style">Okay, the answer is I have great passion and love for cooking.Also i feel happy to serve delicious foods to the people around me. Thats why , i started this service to serve people and also fullfil my passion.</p></AnimatedOnScroll>
      <div className=''>
      </div>
      
              
      </div>
           </div>

           <div className='container my-5'>
           <img src={logo} className='floating display-img1 ms-5 ' alt="" />
      
              
           </div>
           </div>
           

    );
};

export default Aboutme;






