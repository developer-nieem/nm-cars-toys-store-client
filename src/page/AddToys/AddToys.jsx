import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddToys = () => {
    const {user} =  useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return <div className="container">
       <div className="row my-3">
        <div className="col">
        <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className="row my-3">
        <div className="col-md-6">
        <input className="form-control"  placeholder="Toys Name" {...register("toysName")} />
        </div>
        <div className="col-md-6">
        <input className="form-control" defaultValue={user?.displayName ?  user?.displayName : ''} placeholder="Seller Name" {...register("sellerName", { required: true })} />
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6">
        <input className="form-control" defaultValue={user?.email ? user.email : ''} placeholder="Seller Email" {...register("sellerEmail")} />
        </div>
        <div className="col-md-6">
        <select className="form-select"  {...register("subCategory")}>
        <option value="sportsCar">Sports car</option>
        <option value="truck">Truck</option>
        <option value="regularCar">Regular Car</option>
        <option value="miniTruck"> mini fire truck</option>
      </select>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-6">
        <input className="form-control"  placeholder="Photo URL" {...register("photo")} />
        </div>
        <div className="col-md-2">
        <input className="form-control" placeholder="Price" {...register("price", { required: true })} />
        </div>
        <div className="col-md-2">
        <input className="form-control" placeholder="Rating" {...register("rating", { required: true })} />
        </div>
        <div className="col-md-2">
        <input className="form-control" placeholder="Quantity" {...register("quantity", { required: true })} />
        </div>
      </div>
      <div className="row my-3">
        <div className="col-md-12">
        <input className="form-control" placeholder="Description" {...register("details", { required: true })} />
            
        </div>
        
      </div>

      {errors.exampleRequired && <span>This field is required</span>}
      
      <input className="btn btn-primary w-100" type="submit" value='Add Toys' />
    </form>
        </div>
       </div>

  </div>;
};

export default AddToys;
