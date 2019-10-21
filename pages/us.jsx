import React, { useState, useEffect } from "react";
import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import fetch from "isomorphic-unfetch";
import "../client/scss/app.scss";
import anime from "animejs";

Us.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:3000/api/stylists");
  const json = await res.json();
  return { req: json };
};

function Us({ req }) {
  console.log(req.stylists)
  const path = "/stylists/";
  let img = req.stylists[0].small_image.filename;
  img = path + img;

  function StylistBubble() {

    const stylists = req.stylists;
    if(stylists.length == 0){
      return <h1 style={{color:'red'}}>Please add stylists with images using your admin portal located at
      www.morganashleysalon.com/admin</h1>
    }
    const items = [];
    for(let i = 0;i<req.stylists.length;i++){
      let filename = stylists[i].small_image.filename;
      let image = path + filename;
      let name = stylists[i].name;
      name = name.first + " " + name.last;
      console.log(image)
      items.push(
        <li className="flex-item">
        <span className="flex-name">{name}</span>
        <a className="w-100 h-100 d-block">
          <div className='shader'>
          <img src={image} className="flex-image" />
          </div>
        </a>
      </li>
      )
    }

    return items;
  }

  return (
    <>
      <Navbar />
      <Banner
        bannerImage={"/images/us/banner.jpg"}
        sectionName="us"
        content="MEET OUR TEAM"
      />
      <div className="container">
        <div className="row justify-content-center usButtonsContainer">
          <div className="usBtnContainer col-md-2">
            <button className="usButtons active" id="stylistsButton">
              Stylists
            </button>
          </div>
          <div className="usBtnContainer col-md-2">
            <button className="usButtons" id="teamButton">
              Team
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="bubbleContainer">
        <p className="text-center mt-4" style={{ color: "grey" }}>
          Click on a stylist to see their work and prices!
        </p>
        <ul className="flex-container">
          <StylistBubble />
        </ul>
      </div>
    </>
  );
}

export default Us;
