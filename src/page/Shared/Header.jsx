import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Header = () => {
    const user =  'nieem';
  return (
    <>
      <nav className="navbar container navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img style={{width:'35%'}} className=' ' src={logo} alt="cars" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" href="#">
                All Toys
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" href="#">
                My Toys
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" href="#">
                Add A Toy
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" href="#">
                Blogs
                </Link>
              </li>
              
            </ul>
            <div>
              {
                user ? <>  <img  data-tooltip-id="my-tooltip"
                data-tooltip-content={ user}
                style={{ width: "44px", height: "44px" }}
                className="rounded-circle"
                src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/666/666201.png'}
                alt=""
              />
              <Tooltip id="my-tooltip" /> <button  className="btn btn-primary">Log Out</button> </> : <Link to='/login' className="btn btn-info ms-2">LogIn</Link>
              }
             
              
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
