import React,{useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/favicon.png';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import {FaUser,FaIdCard,FaSignOutAlt} from 'react-icons/fa';
import './Header.css';
// import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Header = () => {

  const {user,logOut} = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () =>{
      logOut()
       .then( () => {})
       .catch( error => console.error(error))
    }
  
    // const {user,logOut} = useContext(AuthContext);
    // console.log(user)

    // const handleLogOut = () =>{
    //   logOut()
    //    .then( () => {})
    //    .catch( error => console.error(error))
    // }
   


    
    return (
     
      <div>
      <Navbar collapseOnSelect expand="lg" variant='light' className='pt-4 pb-4 navcontainer'>  
        <img className='image' src={logo} alt="" />
          <Navbar.Brand href="#home" className='ms-3 fs-1 mt-2 name'>Cheffythings_</Navbar.Brand>  
          <Navbar.Toggle aria-controls="navbarScroll"  data-bs-target = "#navbarScroll" />  
          <Navbar.Collapse id="navbarScroll">  
          
            <Nav className='navstyle w-100'>  
                  <NavLink eventkey="1" className='ms-5 ps-5' as={Link} to="/">Home</NavLink>
                  <NavLink eventkey="2" className='ps-5' as={Link} to="/Services" >Services</NavLink>
                  <NavLink eventkey="3" className='ps-5' as={Link} to="/Blog" >Blog</NavLink>
                  <Nav className='sidebar d-flex'>
          
                  {
                        user?.photoURL?
                        <Image data-toggle="tooltip" title={user?.displayName} className='ms-3 display-img' 
                               roundedCircle
                              src={user?.photoURL}>
                        </Image> 
                        : <NavLink as={Link} to="/Login"  ><FaUser className='ms-5 w-100 mt-1' ></FaUser></NavLink>
                      
                  }

                  {
                      user?.uid?
                      <>
                       <span>{user?.displayName}</span>
                       
                       <NavLink className='ms-2' as={Link} to="/Myreview"><small>My Reviews</small></NavLink>
                       <NavLink className='ms-1'as={Link} to="/Addservice"><small>Add Service</small></NavLink>
                       <NavLink onClick={handleLogOut} className='ms-3 logout-btn d-flex'><small>Log Out</small><FaSignOutAlt className='mt-1 ms-1'></FaSignOutAlt></NavLink>
                       
                       
                       
                       
                       </>
                      :

                      <>
                      <NavLink  className='ms-3' as={Link} to="/Login" >Log in</NavLink>
                      <NavLink  className='d-flex' as={Link} to="/Register">Register<FaIdCard className='ms-2 mt-1'></FaIdCard></NavLink>   
                      </>
                     
                    }
                
                     
          
                  </Nav>
                  
            </Nav>  
         

          </Navbar.Collapse>  
        {/* </Container>   */}
       
      </Navbar>  
      </div>
    );
};

export default Header;