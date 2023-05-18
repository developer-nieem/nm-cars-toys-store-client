import React, { useEffect, useState } from 'react';
import Toy from './Toy';

const Categories = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [toys , setToys] =  useState([])

    console.log(toys);
  useEffect(() => {
    fetch(`http://localhost:3000/toys/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };
    return (
        <div className='container my-5'>
            <div className='text-center'>
                <h2 className='mb-5'>Category with Car toys </h2>
            <div
              onClick={() => handleTabClick("all")}
              className={`btn all ${
                activeTab == "all" ? " bg-danger text-white" : ""
              }`}
            >
              All
            </div>
            <div
              onClick={() => handleTabClick("sportsCar")}
              className={`btn  ${
                activeTab == "sportsCar" ? " bg-danger text-white" : ""
              }`}
            >
              Sports Car
            </div>
            <div
              onClick={() => handleTabClick("truck")}
              className={`btn  ${
                activeTab == "truck" ? " bg-danger text-white" : ""
              }`}
            >
              Truck
            </div>
            <div
              onClick={() => handleTabClick("regularCar")}
              className={`btn  ${
                activeTab == "regularCar" ? " bg-danger text-white" : ""
              }`}
            >
              Sports Car
            </div>
            </div>

              <div className='row row-cols-1 my-4 row-cols-md-3 g-4'>
                {
                    toys.map((toy ) => <Toy key={toy._id} toy={toy}></Toy>)
                }
              </div>

        </div>
    );
};

export default Categories;