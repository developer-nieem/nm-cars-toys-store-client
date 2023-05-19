import logo from '../../../public/logo.png'
import { FaEnvelope, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
       
      
        <footer style={{backgroundColor: 'rgb(10 16 32)'}} className=" text-white pt-5">
            <div className="container">
          <div className="row mb-5">
            <div className="col-md-5">
              <a href="#" > <img style={{width:'30%'}} className=' mb-3' src={logo } alt="car"  /> </a>
              <p className=' pe-5'>Welcome to NM Car Toys Shop, your one-stop destination for all your car toy needs. We offer a wide range of high-quality and realistic toy cars that are perfect for collectors, enthusiasts, and children alike. Whether you're looking for classic models, modern sports cars, or vintage replicas, we have something for everyone. </p>
            </div>
            <div className="col-md-2 mt-4 ml-auto">
              <h3>Shop</h3>
              <ul className="list-unstyled   links">
                <li className='my-2'><a className='text-light' href='#'>Sell online</a></li>
                <li className='my-2'><a className='text-light' href='#'>Features</a></li>
                <li className='my-2'><a className='text-light' href='#'>Examples</a></li>
                <li className='my-2'><a className='text-light' href='#'>Website editors</a></li>
                <li className='my-2'><a className='text-light' href='#'>Online retail</a></li>
              </ul>
            </div>
           
            <div className="col-md-2 mt-4 ml-auto">
              <h3>About</h3>
              <ul className="list-unstyled links">
                <li className='my-2'><a className='text-light' href='#'>Contact</a></li>
                <li className='my-2'><a className='text-light' href='#'>Services</a></li>
                <li className='my-2'><a className='text-light' href='#'>Team</a></li>
                <li className='my-2'><a className='text-light' href='#'>Career</a></li>
                <li className='my-2'><a className='text-light' href='#'>Contacts</a></li>
              </ul>
            </div>

            <div className="col-md-3 mt-4 ml-auto">
              <h3>Contact Us</h3>
              <ul className="list-unstyled links">
                <li>Email: nieemhossen@gmail.com </li>
                <li>Phone: 01838046483 </li>
                <li>Address: Dhaka, Bangladesh </li>
                <li className='fs-4 text-md-center '> <a className='px-2 text-light' href="https://web.facebook.com/m.nieemhossen/"><FaFacebook ></FaFacebook></a> <a className='px-2 text-light'  href="#"> <FaTwitter></FaTwitter></a> <a className='px-2 text-light' href="#"><FaYoutube></FaYoutube></a>  <a className='px-2 text-light' href="mailto:nieemhossen@gmail.com"><FaEnvelope></FaEnvelope></a> </li>
                
              </ul>
            </div>
          </div>

<hr />
          <div className="row mb-4">
            
            <div className="col-md-6 text-md-left">
              <ul className="text-start">
              © 2023 NM CARS | All rights reserved
              </ul>
            </div>
            <div className="col-md-6 text-md-right">
            <ul className=" link-menu text-md-end">
                <a className='m-2' href="#">Privacy Policy</a>
                <a className='m-2' href="#">Terms &amp; Conditions</a>
              </ul>
            </div>
          </div>

         
        </div>
        
      
        </footer>
    
    

    );
};

export default Footer;