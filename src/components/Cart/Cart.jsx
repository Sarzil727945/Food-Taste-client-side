import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { AiFillLike } from 'react-icons/ai';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = ({ data }) => {
     const { picture, name, Experiences, likes, btn1, recipesNumber } = data;
     return (
          <div className='col-lg-4 mb-3'>
               <div>
                    <Card className=' '>
                         <Card.Body>
                              <img className=' w-100 rounded imageStyle' src={picture} alt="" />
                              <h3 className='mt-4'>Name: {name}</h3>
                              <h4>Numbers of recipes: {recipesNumber}</h4>
                              <Card.Title >Experience: {Experiences}</Card.Title>

                              <Card.Subtitle className=" text-muted my-3">

                                   <span> <span className=' fs-4'><AiFillLike/></span> Likes: {likes} </span>
                              </Card.Subtitle>
                              <div className=' text-center'>
                                   <Button variant="info">
                                        <Link className='text-decoration-none' to={`/viewRecipes/${recipesNumber}`}>{btn1} </Link>
                                   </Button>
                              </div>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default Cart;