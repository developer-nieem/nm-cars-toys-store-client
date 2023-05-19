import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
const Banner = () => {
    useEffect(() => {
        AOS.init({
          duration: 3000
        });
      }, []);
    return (
        <div className='banner-section d-flex justify-content-center align-items-center'>
            <div className=' text-white text-center p-2'>
                        <h2 >
                        Rev Up Your Collection with NM Car Toys Shop!
                        </h2>
                        <p>
                        Discover a world of miniature automotive excellence at NM Car Toys Shop.  Explore our vast selection of high-quality <br /> and realistic toy cars, perfect for collectors, enthusiasts, and kids. 
                        </p>
                        <button data-aos="zoom-in" data-aos-duration="2000" className='btn btn-primary btn-lg'>Purchase Car Toys</button>
                    
            </div>
        </div>
    );
};

export default Banner;