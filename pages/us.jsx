import React, { useState, useEffect } from "react";
import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import "../client/scss/app.scss";

const Us = () => {
  return (
    <>
      <Navbar />
      <Banner
        bannerImage={"/images/us/banner.jpg"}
        sectionName="us"
        content="MEET OUR TEAM"
      />
    </>
  );
};

export default Us;
