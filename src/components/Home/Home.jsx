import React, { useEffect, useState } from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";
import Cart from '../Cart/Cart';
import HomeSection3 from '../HomeSection3/HomeSection3';
import HomeSection4 from '../HomeSection4/HomeSection4';

const Home = () => {
     const [allData, setAllData] = useState([])
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          fetch('https://assignment10-food-recipe-server-site-sarzil727945.vercel.app/')
               .then(res => res.json())
               .then(data => {
                    setAllData(data);
                    setIsLoading(false);
                  })
     }, [])

     return (
          <div className='mt-4 pt-5'>

               {/* section1  part starts  */}
               <section className="container-fluid section1 pt-5">
                    <Marquee>
                         <h1 className=' text-color'>Welcome to this Website Home Page</h1>
                    </Marquee>
                    <div className='mt-lg-5 pt-lg-5'>
                         <p className=' fs-1 text-center mt-lg-5 text-muted'>Lemon & Limes - Personal Food Blog WordPress Theme</p>
                         <h1 className='text-center display-3 fw-semibold'>
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

               {
                    isLoading && <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
               }

               <section className=' pt-lg-5 mt-lg-5 container'>
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

                         <div className=' container'>
                         <hr />
                         </div>
               {/* section3  part start */}
               <section className=' container mt-5 pt-lg-4'>
                    <h2 className=' text-center fw-semibold display-4'>Food Display @ Prices</h2>
                    <HomeSection3></HomeSection3>
                    <hr />
               </section>
               {/* section3  part ends */}

               {/* section4  part start */}
               <section className=' mt-5 pt-lg-3'>
                    <HomeSection4></HomeSection4>
               </section>
               {/* section4  part ends */}
          </div>
     );
};

export default Home;