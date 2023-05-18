import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import UpdateModal from "./MyToysUpdate/UpdateToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [liveUpdate, setLiveUpdate] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user , liveUpdate ]);

  const deleteToys =  (id) => {

    fetch(`http://localhost:3000/deletetoy/${id}` , {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            Swal.fire({

                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    setLiveUpdate(!liveUpdate)
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
        })

    

  }

  return (
    <div className="container-fluid my-5">
      <table className="table table-striped shadow-lg ">
        <thead className="">
          <tr className="table-secondary">
            <th scope="col">SL</th>
            <th scope="col">Seller Name</th>
            <th scope="col">Image</th>
            <th scope="col">Toy Name</th>
            <th scope="col">Toy Details</th>
            <th scope="col">Sub-category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit </th>
            <th scope="col">Delete </th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy, index) => (
            <tr key={toy._id}>
              <th scope="row">{index + 1}</th>
              <td>{toy.sellerName}</td>
              <td>
                <img
                  className="rounded-circle"
                  style={{ width: "27px", height: "27px" }}
                  src={toy.photo}
                  alt=""
                />
              </td>
              <td>{toy.toysName}</td>
              <td>{toy.details.slice(0, 25)} ...</td>
              <td>{toy.subCategory}</td>

              <td>${toy.price}</td>
              <td>{toy.quantity}p</td>
              <td>{toy.rating} star</td>
              <td>
                <Link className="btn btn-primary" to={`/updatedetails/${toy._id}`}>Edit</Link>
              </td>
              <td>
                
                <button onClick={ () => deleteToys(toy._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
