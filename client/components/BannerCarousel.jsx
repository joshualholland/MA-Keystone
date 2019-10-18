import React, { useState, useEffect } from "react";

// Dynamically pulls images from public
const r = require.context(
  "../../public/images/carousel/",
  false,
  /\.(png|jpe?g|svg)$/
);

export default function BannerCarousel(props) {
  

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
      data-interval="3000"
    >
      <div className="carousel-inner">{createItems(r)}</div>
      {/* <a
        className="carousel-control-prev"
        href="#MAcarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#MAcarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a> */}
    </div>
  );
}
