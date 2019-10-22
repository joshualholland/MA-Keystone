import React, { useState, useEffect } from "react";
import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import PersonalModal from "../client/components/PersonalModal";
import fetch from "isomorphic-unfetch";
import "../client/scss/app.scss";
import jquery from "jquery";
import dateParser from "../customModules/dateParser";

Us.getInitialProps = async ({ req }) => {
  const stylistRes = await fetch("http://localhost:3000/api/stylists");
  const stylistsJson = await stylistRes.json();
  const teamRes = await fetch("http://localhost:3000/api/team");
  const teamJson = await teamRes.json();
  const ownersRes = await fetch("http://localhost:3000/api/owners");
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

  console.log(req.teamJson);

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
      let smallImage = path + people[i].small_image.filename;
      let largeImage = path + people[i].large_image.filename;
      let about = people[i].about;
      let key = name.first + Math.floor(Math.random() * Math.floor(10000));

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
          <span className="flex-name">{name}</span>
          {PersonalModal(name, start_date, largeImage, about, key)}
        </li>
      );
    }
    return items;
  }

  function handleClick(e) {
    const inactiveButton = jquery(".usButtons.active");
    const inactiveListId = inactiveButton.attr("id").replace("Button", "List");
    const inactiveList = jquery("#" + inactiveListId);
    inactiveButton.removeClass("active");
    inactiveList.removeClass("active");
    // inactiveList.css('display','none');

    const activeButton = jquery(e.target);
    const activeListId = activeButton.attr("id").replace("Button", "List");
    const activeList = jquery("#" + activeListId);
    activeButton.addClass("active");
    activeList.addClass("active");
    // activeList.css('display','flex');
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
              Team
            </button>
          </div>
          <div className="usBtnContainer col-md-2">
            <button
              className="usButtons"
              id="ownersButton"
              onClick={handleClick}
            >
              Owner
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="bubbleContainer">
        <p className="text-center mt-4" style={{ color: "grey" }}>
          Click on a stylist to see their work and prices!
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
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Us;
