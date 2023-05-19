import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


const ChooseUs = () => {

    useEffect(() => {
        AOS.init({
          duration: 2000
        });
      }, []);
      
    return (
        <div className='container mt-5'>
            <div className="row mt-5">
                <div className="col text-center">
                    <h2 className='fw-light mt-5'>WHY CHOOSE US? </h2>
                    <hr className='w-25 mx-auto' />
                    <p>Choose NM Car Toys Shop for an unmatched selection, premium quality and authenticity, <br /> exceptional customer service, and a convenient shopping experience.</p>
                    <div className="row my-4 ">
                        <div data-aos="fade-right" data-aos-duration="2000" className="col-md-4 ">
                            <div className='p-4 shadow-lg rounded-3 choose-card'>
                            <img className='w-25' src="https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-restock-report-line-icon-vector-png-image_4660266.png" alt="" />
                            <h4>Extensive Selection</h4>
                            <p>At NM Car Toys Shop, we offer a vast and diverse selection of car toys. From classic models to modern sports cars and vintage replicas, our inventory caters to all types of collectors and enthusiasts. </p>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="1000" className="col-md-4  ">
                            <div className='p-4 shadow-lg rounded-3 choose-card'>
                            <img className='w-25 mb-3' src="https://www.pngall.com/wp-content/uploads/2016/05/Best-Quality-PNG.png" alt="" />
                            <h4>Exceptional Quality</h4>
                            <p>We take pride in offering high-quality car toys that are meticulously crafted and realistic in detail. Our toys are made from durable materials. </p>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="2000" className="col-md-4  ">
                            <div className='p-4 shadow-lg rounded-3 choose-card'>
                            <img className='w-25' src="https://t3.ftcdn.net/jpg/02/33/93/58/360_F_233935815_KElUkt5NsRI6aYZCxVJMvgErkqEIkC5u.jpg" alt="" />
                            <h4>Knowledgeable Assistance</h4>
                            <p>Our dedicated and knowledgeable staff are passionate about cars and toys. We are here to assist you in finding the right car toy that suits your preferences, budget, and collection goals. </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;