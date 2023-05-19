import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const ToysDetails = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="container my-5"> 
     <Helmet>
      <title>NM Car toys Store | Toy Details</title>
      </Helmet>
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src= {data.photo} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data.toysName}</h5>
              <p className="card-text">
               <b>Seller Name : </b> {data.sellerName} 
               
              </p>
              <p className="card-text">
               <b>Seller Email : </b> {data.sellerEmail}
              </p>
              <p className="card-text">
               <b>Details : </b> {data.details}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                <b>Price : </b> ${data.price} 
                <b className="m-2">Quantity : </b> ${data.quantity}
                

                    <p className="d-flex mt-3"><b>Rating : </b> <Rating  style={{ maxWidth: 100 }} value={data.rating} readOnly /> {data.rating}</p>
                
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
