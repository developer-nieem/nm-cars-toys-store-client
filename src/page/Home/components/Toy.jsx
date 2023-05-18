import { Rating } from "@smastrom/react-rating";
import React, { useContext } from "react";
import '@smastrom/react-rating/style.css'
import {  toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Toy = ({ toy }) => {
  console.log(toy);
  const { _id, photo, price, rating, toysName } = toy;
    const {user} =  useContext(AuthContext)
  const deatilsHandler =  () => {
    if (!user) {
        toast("You have to log in first to view details!")
    }
        
  }
  return (
    <div>
      <div style={{ height: "500px" }} className="col">
        <div className="card h-100">
          <img
            style={{ height: "200px" }}
            src={photo}
            className="card-img-top "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{toysName}</h5>
            <p className="card-text fw-bolder">Price : ${price}</p>
            <Link to={`/toysdetails/${_id}`} onClick={deatilsHandler} className="btn btn-primary mt-2">View Details </Link>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
          
          <small class="text-body-secondary d-flex">
            Rating :   <Rating  style={{ maxWidth: 100 }} value={rating} readOnly />
             {rating}
             </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
