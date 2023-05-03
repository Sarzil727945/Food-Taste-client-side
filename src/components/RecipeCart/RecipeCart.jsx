import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const RecipeCart = ({ data }) => {
     const { name, rating, method, btn } = data
     const ingredients = data.ingredients;
     console.log(ingredients[0]);

     const [isDisabled, setDisabled] = useState(false);
     const handleSubmit = () => {
          alert('Your button was clicked and is now disabled');
          setDisabled(true);
     }
     return (
          <div className=' col-lg-4 mt-3'>
               <div class="card">
                    <div class="card-header">
                         <h3>{name}</h3>
                    </div>
                    <div class="card-body">
                         <div className='mb-1 d-flex justify-content-between'>
                              <div>
                                   <h5 class="card-title ">Ingredients:</h5>
                              </div>
                              <div>
                                   <p>Rating: {rating}</p>
                              </div>
                         </div>
                         <h6 class="card-subtitle mb-2 text-muted">{ingredients[0]}</h6>
                         <h6 class="card-subtitle mb-2 text-muted">{ingredients[1]}</h6>
                         <h6 class="card-subtitle mb-2 text-muted">{ingredients[2]}</h6>
                         <h6 class="card-subtitle mb-2 text-muted">{ingredients[3]}</h6>
                         <h6 class="card-subtitle mb-2 text-muted">{ingredients[4]}</h6>
                         
                         <h6 className='mt-4'>Cooking Method:</h6>
                         <p class="card-text">{method}</p>

                         <div className=' text-center'>
                              <Button onClick={handleSubmit} disabled={isDisabled} className='text-decoration-none' variant="info">
                                   {btn}
                              </Button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default RecipeCart;