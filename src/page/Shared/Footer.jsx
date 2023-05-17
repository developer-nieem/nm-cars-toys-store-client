import logo from '../../../public/logo.png'
const Footer = () => {
    return (
       
      
        <footer style={{backgroundColor: 'rgb(10 16 32)'}} className=" text-white pt-5">
            <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <a href="#" > <img className='w-25 mb-3' src={logo } alt="car"  /> </a>
              <p className='me-5 pe-5'>Welcome to NM Car Toys Shop, your one-stop destination for all your car toy needs. We offer a wide range of high-quality and realistic toy cars that are perfect for collectors, enthusiasts, and children alike. Whether you're looking for classic models, modern sports cars, or vintage replicas, we have something for everyone. </p>
            </div>
            <div className="col-md-2 ml-auto">
              <h3>Shop</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Sell online</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Examples</a></li>
                <li><a href="#">Website editors</a></li>
                <li><a href="#">Online retail</a></li>
              </ul>
            </div>
            <div className="col-md-2 ml-auto">
              <h3>Press</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Events</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Online retail</a></li>
              </ul>
            </div>
            <div className="col-md-2 ml-auto">
              <h3>About</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contacts</a></li>
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