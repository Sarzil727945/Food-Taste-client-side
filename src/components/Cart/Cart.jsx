import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = ({ data }) => {
     const { picture, name, Experiences, likes, btn, recipesNumber } = data;
     return (
          <div className='col-lg-6 mb-3'>
               <div>
                    <Card className=' '>
                         <Card.Body>
                              <img className=' w-100 rounded imageStyle' src={picture} alt="" />
                              <h2 className='mt-4'>Name: {name}</h2>
                              <h4>Numbers of recipes: {recipesNumber}</h4>
                              <Card.Title >Experience: {Experiences}</Card.Title>
                              <Card.Subtitle className=" text-muted mb-2">

                              </Card.Subtitle>

                              <Card.Subtitle className=" text-muted my-3">

                                   <span> Likes: {likes} </span>
                              </Card.Subtitle>
                              <div className=' text-center'>
                                   <Button variant="info">
                                        <Link className='text-decoration-none' to={`/viewRecipes/${recipesNumber}`}>View Recipes </Link>
                                   </Button>
                              </div>
                         </Card.Body>
                    </Card>
               </div>
          </div>
     );
};

export default Cart;