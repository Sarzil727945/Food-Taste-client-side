import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubViewRecipes from '../SubViewRecipes/SubViewRecipes';

const ViewRecipes = () => {
     const { id } = useParams();

     const [jsonData, setJsonData] = useState([]);

     useEffect(()=>{
          const cartData = async () => {
               const chefData = await fetch('http://localhost:5000/chefData')
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