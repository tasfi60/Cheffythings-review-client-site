import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import logo from '../../../images/food1.jpg';
import logo1 from '../../../images/m1.jpf.jpg';
import logo2 from '../../../images/m2.jpg';
import logo3 from '../../../images/m3.jpg';
import logo4 from '../../../images/m4.jpg';
import logo5 from '../../../images/about.jpg';
import HomeService from '../HomeService/HomeService';
import { useLoaderData,useNavigate } from 'react-router-dom';
import './Home.css';
import { Image } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')

    const services = useLoaderData();

    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/Services');
    }

    return (
        <div className='container w-75 mt-5 home-container'>

                  <Card className="text-dark fw-bolder">
                    <Image className='bg-img' src={logo} alt="" />
                    <Card.ImgOverlay>
                     <Card.Text className='text-container'>
                     <Card.Title className='fs-2 fw-bold container'>Explore the best taste</Card.Title>
                      Looking for something delicious as well as hygienic? <br />
                      Then, you're welcome, Here you can explore the best homemade food.
                     
                     </Card.Text>
                    </Card.ImgOverlay>
                   </Card>

                   <div className='Service-title-container'>
                   <h3>Popular Items</h3>
                   </div>


                   <div className='topics-area mt-1 mb-3'>

            {
            
               
               services.map(service => <HomeService key={service._id} service={service} ></HomeService>)

            }
           
           
               
            </div>

            <div className='Service-btn-container'>
            <button onClick={handleNavigate} className='border  border-1 border-warning rounded'>
             View All
             </button>
                   </div>

            <div>
               <h2 className='Service-title-container'>Make Your fesitval delicious,Sweet & colorful </h2>
               <p>some of my recent work</p>
    <CardGroup className='mt-2 pt-5'>

      <Card className='mx-2 layout'>
        <Card.Img variant="top" src={logo1} className='festive-img'/>
        <Card.Body>
          <Card.Title className='mx-auto'>Sweet Platter</Card.Title>
          <Card.Text>
            Sweet platter mixed with different sweet dishes.Sweet Grazing Platters: they are the sweet sister of the snack platters and you serve them as a treat on your birthday, on a Sunday afternoon with friends.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mx-2 layout'>
        <Card.Img variant="top" src={logo2} className='festive-img'/>
        <Card.Body>
          <Card.Title className='mx-auto'>Sweet Jalebi</Card.Title>
          <Card.Text>
          Jalebi, is a popular sweet snack in south and west Asia, Africa, and Mauritius. It goes by many names, including jilapi, jilebi, jilipi, zulbia, jerry, mushabak, z’labia, or zalabia.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card className='mx-2 layout'>
        
        <Card.Img variant="top" src={logo3} className='festive-img' />
        <Card.Body>
          <Card.Title className="mx-auto">Motichur Laddu</Card.Title>
          <Card.Text>
          Motichoor Ladoo or Motichur Ladoo is a round-shaped sweetmeat made from fine, tiny balls of besan. The chickpea flour globules is fried in ghee or oil, and soaked in sugar syrup. The sweet, pearl-like balls are then moulded into ladoos
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className='mx-2 layout'>

        <Card.Img variant="top" src={logo4} className='festive-img' />
        <Card.Body>
          <Card.Title className="mx-auto">Golab Jamun</Card.Title>
          <Card.Text>
          Gulab jamun is a sweet confectionary or dessert, originating in the Indian subcontinent and a type of mithai popular in India, Pakistan, Nepal, the Maldives, and Bangladesh, as well as Myanmar. It is the national dessert of India.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
 

            </div>

            <div className='mt-5'>
            <Card className="text-dark fw-bolder mt-5">
                    <Image className='bg-img1' src={logo5} alt="" />
                    <Card.ImgOverlay>
                     <Card.Text className='text-container1'>
                     <Card.Title className='fs-2 fw-bold container'>Why I have started this?</Card.Title>
                      Okay, the answer is I have great passion and love for cooking.Also i feel happy to serve delicious foods to the people around me. Thats why , i started this service to serve people and also fullfil my passion.
                      
                     
                     </Card.Text>
                    </Card.ImgOverlay>
            </Card>
            </div>
            
        </div>
    );
};

export default Home;