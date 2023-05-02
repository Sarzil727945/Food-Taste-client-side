import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    console.log(jsonData);
     
     
     return (
          <div className='mt-5 pt-5'>
               <h1>view recipes</h1>
          </div>
     );
};

export default ViewRecipes;