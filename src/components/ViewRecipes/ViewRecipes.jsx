import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubViewRecipes from '../SubViewRecipes/SubViewRecipes';
import useTitle from '../../hooks/useTitle';

const ViewRecipes = () => {
     useTitle('ViewRecipes')
     const { id } = useParams();

     const [jsonData, setJsonData] = useState([]);

     useEffect(()=>{
          const cartData = async () => {
               const chefData = await fetch('https://assignment10-food-recipe-server-site-sarzil727945.vercel.app/')
               const chef = await chefData.json()
     
               if (id) {
                    const foundChef = chef.find(dt => dt.recipesNumber === +id)
                    setJsonData(foundChef)
               }
     
          }
          cartData()
     }, [])

     
     
     return (
          <div className='my-3 pt-5'>
               {
                    <SubViewRecipes
                    data = {jsonData}
                    ></SubViewRecipes>
               }
          </div>
     );
};

export default ViewRecipes;