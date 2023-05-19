import { Link, NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png'
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user, logOut} =  useContext(AuthContext);

    const logoutHandler =  () => {
        logOut()
        .then(() =>{})
        .catch(error => {
            console.error(error.message);
        })
    }


  return (
      <div className='shadow-lg'>
      <nav className="navbar container navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" >
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
            <ul className="navbar-nav m-auto mb-2  fw-semibold  mb-lg-0 navmenu">
              <li className="nav-item ">
                <NavLink  to='/' className={`nav-link  `} >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/alltoys' className="nav-link " >
                All Toys
                </NavLink>
              </li>
              {
                user && <li className="nav-item">
                <NavLink to='/mytoys' className="nav-link " >
                My Toys
                </NavLink>
              </li>
              }
             {
                user &&  <li className="nav-item">
                <NavLink to='/addtoys' className="nav-link ">
                Add A Toy
                </NavLink>
              </li>
             }
              <li className="nav-item">
                <NavLink to='/blog' className="nav-link " >
                Blogs
                </NavLink>
              </li>
              
            </ul>
            <div>
              {
                user ? <>  <img  data-tooltip-id="my-tooltip"
                data-tooltip-content={ user.displayName? user.displayName : ''}
                style={{ width: "44px", height: "44px" }}
                className="rounded-circle"
                src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/666/666201.png'}
                alt=""
              />
              <Tooltip id="my-tooltip" /> <button onClick={logoutHandler}  className="btn btn-primary">Log Out</button> </> : <Link to='/login' className="btn btn-info ms-2">LogIn</Link>
              }
             
              
            </div>
          </div>
        </div>
      </nav>
      </div>
    
  );
};

export default Header;
