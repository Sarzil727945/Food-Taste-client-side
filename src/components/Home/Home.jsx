import React, { useEffect, useState } from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";
import Cart from '../Cart/Cart';

const Home = () => {
     const [allData, setAllData] = useState([])

     useEffect(() => {
          fetch('http://localhost:5000/chefData')
               .then(res => res.json())
               .then(data => setAllData(data))
     }, [])

     return (
          <div className='mt-4 pt-5'>

               {/* section1  part starts  */}
               <section className="container-fluid section1 pt-5">
                    <Marquee>
                         <h1 className=' text-color'>Welcome to this Website Home Page</h1>
                    </Marquee>
                    <div className='mt-lg-5 pt-lg-5'>
                         <p className=' fs-1 text-muted text-center mt-lg-5'>Lemon & Limes - Personal Food Blog WordPress Theme</p>
                         <h1 className='text-center display-3 '>
                              Specially designed for food bloggers, cooking enthusiasts and small food businesses.
                         </h1>
                         <div className=' text-center mt-5'>
                              <button type="button" className="btn btn-light me-3">VIEW DEMOS</button>
                              <button type="button" className="btn btn-dark">BUY NOW</button>
                         </div>
                    </div>
               </section>
               {/* section1  part ends */}
               

               {/* section2  part starts */}
               <section className=' mt-lg-5 container'>
                    <div className='row mt-3'>
                         {
                              allData.map(data => <Cart
                                   key={data.recipesNumber}
                                   data={data}
                              ></Cart>)
                         }
                    </div>
               </section>
               {/* section2  part ends */}
          </div>
     );
};

export default Home;