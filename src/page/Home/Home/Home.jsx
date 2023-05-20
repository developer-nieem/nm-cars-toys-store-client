import { useState } from "react";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Gallery from "../components/Gallery";
import Mission from "../components/Mission";
import Categories from "../components/categories";
import { Helmet } from "react-helmet";
const Home = () => {
  
  return (
    <div>
      <Helmet>
        <title>NM Car toys Store | Home</title>
      </Helmet>

      <Banner></Banner>
      <Gallery></Gallery>

      
        <Categories></Categories>
     

      <ChooseUs></ChooseUs>
      <Mission></Mission>
    </div>
  );
};

export default Home;
