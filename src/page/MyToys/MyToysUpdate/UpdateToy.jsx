import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { Navigate, redirect, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateToy = () => {
  const { user } = useContext(AuthContext);

  const toy = useLoaderData();
  console.log(toy);

  const {
    _id,
    price,
    toysName,
    sellerName,
    sellerEmail,
    photo,
    quantity,
    rating,
    details,
  } = toy;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Updated toys data 
  const onSubmit = (data) => {
    
    fetch(`https://assignments11-server-developer-nieem.vercel.app/updatetoys/${data._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Updated Done!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Okay '
          })
          return redirect("/");
        }
        console.log(data);
      });


  };

  return (
    <div className="container my-5">
       <Helmet>
      <title>NM Car toys Store | Update Toy</title>
      </Helmet>
      <h2  className="text-center my-5">You Want to update :  {toysName}</h2>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
        <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="row my-3">
          <div className="col-md-6">
            <input
              className="form-control"
              defaultValue={toysName}
              placeholder="Toys Name"
              {...register("toysName")}
            />
            <input
              className="form-control d-none"
              value={_id}
              placeholder="Toys Name"
              {...register("_id")}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              defaultValue={sellerName}
              placeholder="Seller Name"
              {...register("sellerName", { required: true })}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <input
              className="form-control"
              value={sellerEmail}
              placeholder="Seller Email"
              {...register("sellerEmail")}
            />
          </div>
          <div className="col-md-6">
            <select className="form-select" {...register("subCategory")}>
              <option value="sportsCar">Sports car</option>
              <option value="truck">Truck</option>
              <option value="regularCar">Regular Car</option>
              <option value="miniTruck"> mini fire truck</option>
            </select>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-6">
            <input
              className="form-control"
              defaultValue={photo}
              placeholder="Photo URL"
              {...register("photo")}
            />
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              defaultValue={price}
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              defaultValue={rating}
              placeholder="Rating"
              {...register("rating", { required: true })}
            />
          </div>
          <div className="col-md-2">
            <input
              className="form-control"
              defaultValue={quantity}
              placeholder="Quantity"
              {...register("quantity", { required: true })}
            />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-12">
            <input
              className="form-control"
              defaultValue={details}
              placeholder="Description"
              {...register("details", { required: true })}
            />
          </div>
        </div>

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="btn btn-primary w-100"
          type="submit"
          value="Update Toy"
        />
      </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default UpdateToy;
