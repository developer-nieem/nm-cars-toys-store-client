import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import UpdateModal from "./MyToysUpdate/UpdateToy";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

// ALl posted toy
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [liveUpdate, setLiveUpdate] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  useEffect(() => {
    fetch(`https://assignments11-server-developer-nieem.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user, liveUpdate]);


//   delete posted toy 
  const deleteToys = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignments11-server-developer-nieem.vercel.app/deletetoy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setLiveUpdate(!liveUpdate);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  //   sorting  system
  useEffect(() => {
    if (selectedSort == "high") {
      fetch(`https://assignments11-server-developer-nieem.vercel.app/descendingmytoys/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyToys(data);
        });
    } else if (selectedSort == "low") {
      fetch(`https://assignments11-server-developer-nieem.vercel.app/ascendingmytoys/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyToys(data);
        });
    }
  }, [selectedSort]);

//   sorting function 
  const handleSorting = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div className="container-fluid my-5">
      <Helmet>
        <title>NM Car toys Store | My Toys</title>
      </Helmet>
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4">Posted All My Toys </h2>
        </div>
        <div className="col-md-6 text-end">
          <select
            onChange={handleSorting}
            class="form-select w-25 ms-auto"
            aria-label="Default select example"
          >
            <option value="all">All</option>
            <option value="low">Sort with Low Price</option>
            <option value="high">Sort with High Price</option>
          </select>
        </div>
      </div>
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
                <Link
                  className="btn btn-primary"
                  to={`/updatedetails/${toy._id}`}
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => deleteToys(toy._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
