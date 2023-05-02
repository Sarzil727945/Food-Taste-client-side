import React, { useState } from 'react';
import './SubViewRecipes.css'
import { Button, Card } from 'react-bootstrap';
import { AiFillLike } from 'react-icons/ai';


const SubViewRecipes = ({ data }) => {
     const { picture, name, bio, Experiences, likes, recipesNumber, btn2 } = data;
     const [isDisabled, setDisabled] = useState(false);
     const handleSubmit = () => {
          alert('Your button was clicked and is now disabled');
          setDisabled(true);
        }
     return (
          <div>
               <section>
                    <div className='row w-100'>
                         <div className='col-lg-6 m-0 p-0'>
                              <img className=' imageStyles img-fluid w-100' src={picture} alt="" />
                         </div>
                         <div className='col-lg-6 backgroundStyle'>
                              <h1 className='text-center pt-5'>Details</h1>
                              <div className=' text-center mt-5'>
                                   <h3>Name: {name}</h3>
                                   <h4>Number of recipes: {recipesNumber}</h4>
                                   <p >Experience: {Experiences}</p>
                                   <p className=" text-muted my-2">
                                        Description: {bio}
                                   </p>
                                   <p>
                                   <span> <span className=' fs-4'><AiFillLike/></span> Likes: {likes} </span>
                                   </p>
                                   <div className=' text-center'>
                                   <Button onClick={handleSubmit} disabled={isDisabled} className='text-decoration-none' variant="info">
                                        {btn2}
                                   </Button>
                              </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
     );
};

export default SubViewRecipes;