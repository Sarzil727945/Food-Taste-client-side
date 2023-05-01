import React from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";

const Home = () => {
     return (
          <div className='mt-2 pt-5'>
               {/* section1 html part starts  */}

               <section className="container-fluid section1 pt-5">
                    <Marquee>
                         <h1 className=' text-info'>This is Home Page</h1>
                    </Marquee>
                    <div className='mt-lg-5 pt-lg-5'>
                         <p className=' fs-1 text-muted text-center mt-lg-5'>Lemon & Limes – Personal Food Blog WordPress Theme</p>
                         <h1 className='text-center display-3 '>
                              Specially designed for food bloggers, cooking enthusiasts and small food businesses.
                         </h1>
                         <div className=' text-center mt-5'>
                              <button type="button" class="btn btn-light me-3">VIEW DEMOS</button>
                              <button type="button" class="btn btn-dark">BUY NOW</button>
                         </div>
                    </div>

               </section>
               {/* section1 html part ends */}

          </div>
     );
};

export default Home;