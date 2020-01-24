import React, { useState, useEffect } from "react";

// Dynamically pulls images from public
const r = require.context(
  "../../public/images/carousel/",
  false,
  /\.(png|jpe?g|svg)$/
);

export default function BannerCarousel(props) {


  // This creates the carousel items with an input parameter which contains the image paths
  function createItems(r) {
    let items = [];
    r.keys().map((item, index) => {
      if (index === 0) {
        items.push(
          <div key={index} className="carousel-item active">
            <img
              className="d-block w-100 imageFitCarousel"
              src={item.replace("./", "./images/carousel/")}
              style={{ height: `${props.height}px` }}
            />
          </div>
        );
      } else {
        items.push(
          <div key={index} className="carousel-item">
            <img
              className="d-block w-100 imageFitCarousel"
              src={item.replace("./", "./images/carousel/")}
              style={{ height: `${props.height}px` }}
            />
          </div>
        );
      }
    });
    return items;
  }

  return (
    <div
      id="MAcarousel"
      className="carousel slide carousel-fade imageFitCarousel"
      data-ride="carousel"
      data-interval="2000"
    >
      <div className="carousel-inner">{createItems(r)}</div>
    </div>
  );
}
