import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCart = ({ data }) => {
     const { name, rating, method, btn } = data
     const ingredients = data.ingredients;

     const [isDisabled, setDisabled] = useState(false);
     const handleSubmit = () => {
          toast("Added to favorite !!");

          setDisabled(true);
     }
     return (
          <div className=' col-lg-4 mt-3'>
               <div className="card">
                    <div className="card-header">
                         <h3>{name}</h3>
                    </div>
                    <div className="card-body">
                         <div className='mb-1 d-flex justify-content-between'>
                              <div>
                                   <h5 className="card-title ">Ingredients:</h5>
                              </div>
                              <div>
                                   <p>Rating: {rating}</p>
                              </div>
                         </div>
                         <h6 className="card-subtitle mb-2 text-muted">{ingredients[0]}</h6>
                         <h6 className="card-subtitle mb-2 text-muted">{ingredients[1]}</h6>
                         <h6 className="card-subtitle mb-2 text-muted">{ingredients[2]}</h6>
                         <h6 className="card-subtitle mb-2 text-muted">{ingredients[3]}</h6>
                         <h6 className="card-subtitle mb-2 text-muted">{ingredients[4]}</h6>
                         
                         <h6 className='mt-4'>Cooking Method:</h6>
                         <p className="card-text">{method}</p>

                         <div className=' text-center'>
                              <Button onClick={handleSubmit} disabled={isDisabled} className='text-decoration-none' variant="info">
                                   {btn}
                              </Button>
                              <ToastContainer />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default RecipeCart;