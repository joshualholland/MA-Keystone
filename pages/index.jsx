import React, { useState, useEffect } from "react";
import Navbar from "../client/components/Navbar";
import ReactCarousel from "../client/components/ReactCarousel";
import "../client/scss/app.scss";

let window = require("global/window");

const Home = () => {
  const [height, setHeight] = useState(0);

  // componentDidMount()
  useEffect(() => {
    setHeight($(window).height());
    // window.addEventListener("resize", updateDimensions);
  }, []);

  function updateDimensions(){
    setHeight($(window).height());
  }

  

  return (
    <>
      <div className="page" id="top">
      <Navbar/>
        <div className="imageContainer bg-dark relative">
          {/* <ReactCarousel height={height} /> */}
        </div>
          
      </div>
      {/* <h1>{height}</h1> */}
    </>
  );
};

export default Home;
