import React, { useState, useEffect } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import jquery from "jquery";
import dateParser from "../customModules/dateParser";

import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import PersonalModal from "../client/components/PersonalModal";
import Footer from "../client/components/Footer";

import "../client/scss/app.scss";
import "../client/scss/custom/layout/fadeIn.scss"; // This CSS conflicts with bootstrap so it's separated here.

// MONTH DAY YEAR 

/* PRODUCTION */
let url = "https://morgan-ashley-salon.herokuapp.com";

Us.getInitialProps = async ({ req }) => {
  const stylistRes = await fetch(url + "/api/stylists");
  const stylistsJson = await stylistRes.json();
  const teamRes = await fetch(url + "/api/team");
  const teamJson = await teamRes.json();
  const ownersRes = await fetch(url + "/api/owners");
  const ownersJson = await ownersRes.json();
  return { req: { stylistsJson, teamJson, ownersJson } };
};

function Us({ req }) {
  const stylistsPath = "/stylists/";
  const teamPath = "/team/";
  const ownersPath = "/owners/";
  const stylistsList = req.stylistsJson.stylists;
  const teamList = req.teamJson.team;
  const ownersList = req.ownersJson.owners;

  function createPeopleBubbles(peopleList, path) {
    const people = peopleList;
    if (people.length == 0) {
      return (
        <h1 style={{ color: "red" }}>
          Please add items with images using your admin portal located at
          www.morganashleysalon.com/admin
        </h1>
      );
    }


    const items = [];
    for (let i = 0; i < people.length; i++) {
      let name = people[i].name;
      let start_date = dateParser(people[i].start_date);
      let smallImage = has(people[i], "small_image.url") // prevents undefined error with empty database
        ? people[i].small_image.url
        : "/images/misc/error.png";
      let largeImage = has(people[i], "large_image.url") // prevents undefined error with empty database
        ? people[i].large_image.url
        : "/images/misc/error.jpg";
      let about = people[i].about;
      let key = name.first + Math.floor(Math.random() * Math.floor(10000));
      let services = people[i].services;
      let prices = people[i].prices;

      name = name.first + " " + name.last;
      items.push(
        <li key={i} className="flex-item">
          <a
            className="w-100 h-100 d-block"
            data-toggle="modal"
            data-target={"#" + key}
          >
            <div className="shader">
              <img src={smallImage} className="flex-image" />
            </div>
          </a>
          <a data-toggle="modal" data-target={"#" + key}>
            <span className="flex-name">{name}</span>
          </a>
          {PersonalModal(
            name,
            start_date,
            largeImage,
            about,
            key,
            services,
            prices
          )}
        </li>
      );
    }
    return items;
  }

  // This will handle greying out buttons on the US page
  function handleClick(e) {
    const inactiveButton = jquery(".usButtons.active");
    const inactiveListId = inactiveButton.attr("id").replace("Button", "List");
    const inactiveList = jquery("#" + inactiveListId);
    inactiveButton.removeClass("active");
    inactiveList.removeClass("active");

    const activeButton = jquery(e.target);
    const activeListId = activeButton.attr("id").replace("Button", "List");
    const activeList = jquery("#" + activeListId);
    activeButton.addClass("active");
    activeList.addClass("active");

    displaySmallText();
  }

  function displaySmallText() {
    let stylistsButton = document.getElementById('stylistsButton');
    let teamButton = document.getElementById('teamButton');
    let ownersButton = document.getElementById('ownersButton');
    let smallText = document.getElementById("labelText");
    console.log(stylistsButton.className)
    if (stylistsButton.className === "usButtons active") {
      smallText.innerText = 'Click on a stylist to see their services and prices!'
    } else if (teamButton.className === "usButtons active") {
      smallText.innerText = 'Click on a team member to learn more!'
    } else if (ownersButton.className === "usButtons active") {
      smallText.innerText = 'Click on an owner to learn more!'
    }
    
  }

  return (
    <>
      <Head>
        <title>Morgan Ashley Salon | US</title>
      </Head>
      <Navbar />
      <Banner
        bannerImage={"/images/us/us-banner.jpg"}
        sectionName="us"
        content="MEET OUR TEAM"
      />
      <div className="container">
        <div className="row justify-content-center usButtonsContainer">
          <div className="usBtnContainer col-md-2">
            <button
              className="usButtons active"
              id="stylistsButton"
              onClick={handleClick}
            >
              Stylists
            </button>
          </div>
          <div className="usBtnContainer col-md-2">
            <button className="usButtons" id="teamButton" onClick={handleClick}>
              Staff
            </button>
          </div>
          <div className="usBtnContainer col-md-2">
            <button
              className="usButtons"
              id="ownersButton"
              onClick={handleClick}
            >
              Owners
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="bubbleContainer">
        <p className="text-center mt-4" id="labelText" style={{ color: "grey" }}>
            Click on a Stylist to see their services and prices!
        </p>
        <ul className="flex-container active" id="stylistsList">
          {createPeopleBubbles(stylistsList, stylistsPath)}
        </ul>
        <ul className="flex-container" id="teamList">
          {createPeopleBubbles(teamList, teamPath)}
        </ul>
        <ul className="flex-container" id="ownersList">
          {createPeopleBubbles(ownersList, ownersPath)}
        </ul>
      </div>
      <Footer />
    </>
  );
}

// This helper method can test whether an object has a certain property or not
let has = function (obj, key) {
  return key.split(".").every(function (x) {
    if (typeof obj != "object" || obj === null || !x in obj) return false;
    obj = obj[x];
    return true;
  });
};

export default Us;
