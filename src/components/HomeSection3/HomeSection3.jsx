import React from 'react';
import './HomeSection3.css'

const HomeSection3 = () => {
     return (
          <div className='row mt-5'>
               <div className='col-lg-3 text-center'>
                    <div>
                         <img className=' imgS img-fluid rounded' src="https://as1.ftcdn.net/v2/jpg/01/30/98/18/1000_F_130981819_J9IHFqbylFHN0A6H5mrtHcVQaKJ4Kh1U.jpg" alt="" />
                    </div>
                    <div className='mt-4 mx-lg-2'>
                     <h4>Blueberry & Juniper Jam </h4>
                     <p>$12.00</p>
                    </div>
               </div>
               <div className='col-lg-3 text-center'>
                    <div>
                         <img className=' imgS img-fluid rounded' src="https://as2.ftcdn.net/v2/jpg/01/00/24/89/1000_F_100248969_a4lxq5LrVxG1oBYKrsJW7MaUv9qAksPA.jpg" alt="" />
                    </div>
                    <div className='mt-4 mx-lg-2'>
                     <h4>OLIVE BREAD</h4>
                     <p>$15.00</p>
                    </div>
               </div>

               <div className='col-lg-3 text-center'>
                    <div>
                         <img className=' imgS img-fluid rounded' src="https://as2.ftcdn.net/v2/jpg/00/85/26/39/1000_F_85263988_JtWOJg2iVa9I0O72tJgT9WJPg7zppWLy.jpg" alt="" />
                    </div>
                    <div className='mt-4 mx-lg-2'>
                     <h4>WHOLE-GRAIN BREAD</h4>
                     <p> <del>$11.00</del> $9.00</p>
                    </div>
               </div>

               <div className='col-lg-3 text-center'>
                    <div>
                         <img className=' imgS img-fluid rounded' src="https://as1.ftcdn.net/v2/jpg/03/00/92/44/1000_F_300924437_7Y5SnjnohFypi10Rz5qgEFuO1h2Hcvla.jpg" alt="" />
                    </div>
                    <div className='mt-4 mx-lg-2'>
                     <h4>FARMING BREAD</h4>
                     <p>$20.00</p>
                    </div>
               </div>
               
          </div>
     );
};

export default HomeSection3;