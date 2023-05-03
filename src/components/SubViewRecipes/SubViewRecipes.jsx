import React, { useState } from 'react';
import './SubViewRecipes.css'
import { Button, Card } from 'react-bootstrap';
import { AiFillLike } from 'react-icons/ai';
import RecipeCart from '../RecipeCart/RecipeCart';


const SubViewRecipes = ({ data }) => {
     const { picture, name, bio, Experiences, likes, recipesNumber, btn2 } = data;
     const recipeData = data.recipes

   
     return (
          <div>
               <section>
                    <div className='row w-100 backgroundStyle'>
                         <div className='col-lg-6'>
                              <img className=' imageStyles img-fluid w-100' src={picture} alt="" />
                         </div>
                         <div className='col-lg-6 '>
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
                                   
                              </div>
                         </div>
                    </div>
               </section>
               <section className='mt-5'>
                   <div className='mx-lg-5 row'>
                   {
                       recipeData &&  recipeData.map(data => <RecipeCart
                              key={data.rating}
                              data={data}
                         ></RecipeCart>)
                    }
                   </div>
               </section>
          </div>
     );
};

export default SubViewRecipes;