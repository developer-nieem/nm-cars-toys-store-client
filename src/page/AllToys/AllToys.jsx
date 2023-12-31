import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // console.log(searchText);

  console.log(toys);
  useEffect(() => {
    fetch(`https://assignments11-server-developer-nieem.vercel.app/toys/all`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        setIsLoading(false)
      });
  }, []);

  const handleSearch =  () => {
        fetch(`https://assignments11-server-developer-nieem.vercel.app/toyssearch/${searchText}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setToys(data)
        })
  }

  return (
    <div className="container-fluid my-5">
       <Helmet>
      <title>NM Car toys Store | All Toys</title>
      </Helmet>
      <div className="text-center input-group w-25 m-auto my-4">
      <input  onChange={(e) => setSearchText(e.target.value)} className="form-control" type="search" name="search" placeholder="Search Toys" />
      <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>

      <table className="table table-striped shadow-lg ">
        <thead className="">
          <tr className="table-secondary">
            <th scope="col">SL</th>
            <th scope="col">Seller Name</th>
            <th scope="col">Toy Name</th>
            <th scope="col">Sub-category</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Details </th>
          </tr>
        </thead>
        <tbody >

        {isLoading ? (
                    <div className="text-center w-100">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    toys.map((toy , index) => (
            
                      <tr key={toy._id}>
                        <th scope="row">{index +1}</th>
                        <td>{toy.sellerName}</td>
                        <td>{toy.toysName}</td>
                        <td>{toy.subCategory}</td>
                        <td>${toy.price}</td>
                        <td>{toy.quantity}p</td>
                        <td> <Link className="btn btn-primary" to={`/toysdetails/${toy._id}`}>View Details</Link> </td>
                      </tr>
                   
                  ))
                  )}

          
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
