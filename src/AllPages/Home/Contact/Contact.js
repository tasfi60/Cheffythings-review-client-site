import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactsIcon from '@mui/icons-material/Contacts';
import FacebookIcon from '@mui/icons-material/Facebook';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container my-5 font' id='contact'>
                 <section className="contact-page-section">
      <div className="container">
          <div className="sec-title">
            
                <h2 className='animate-charcter'>Let's Get in Touch.</h2>
            </div>
            <div className="inner-container">
              <div className="row clearfix">
                
               
                    <div className="form-column col-md-8 col-sm-12 col-xs-12">
                      <div className="inner-column">
                          
                           
                            <div className="contact-form">
                                <form method="post" action="sendemail.php" id="contact-form">
                                    <div className="row clearfix">
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="name" value="" placeholder="Name" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="email" name="email" value="" placeholder="Email" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="subject" value="" placeholder="Subject" required/>
                                        </div>
                                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                            <input type="text" name="phone" value="" placeholder="Phone" required/>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 co-xs-12 ">
                                            <button type="submit" className="theme-btn btn btn-style-one px-4"><small>Send</small></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                     
                        </div>
                    </div>
                    
               
                    <div className="info-column col-md-4 col-sm-12 col-xs-12 container">
                      <div className="inner-column">
                          <h2><ContactsIcon></ContactsIcon> Contact Info</h2>
                            <ul className="list-info container fs-6"> 
                              <li><LocationOnIcon></LocationOnIcon>Chittagong,Bangladesh.</li>
                                <li><EmailIcon></EmailIcon>cheffythings@gmail.com</li>
                                <li><LocalPhoneIcon></LocalPhoneIcon> +8801521227960</li>
                            </ul>
                            <ul className="social-icon-four container">
                                <li className="follow">Get Connected on: </li>
                                <li><a href="https://www.linkedin.com/in/tasfia-nuzhat-96a5741b8"><LinkedInIcon></LinkedInIcon></a></li>
                                <li><a href="https://github.com/tasfi60"><GitHubIcon></GitHubIcon></a></li>
                                <li><a href="https://www.facebook.com/tasfianuzhat.tasfi.7"><FacebookIcon></FacebookIcon></a></li>
                              
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
       
    </section>


       </div>
        
    );
};

export default Contact;