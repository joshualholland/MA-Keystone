import React, { useState, useEffect } from "react";
import Navbar from "../client/components/Navbar";
import BannerCarousel from "../client/components/BannerCarousel";
import ReviewsCarousel from "../client/components/ReviewsCarousel";
import "../client/scss/app.scss";
import window from "global/window";
import $ from "jquery";

const Home = () => {
  const [height, setHeight] = useState(0);

  // componentDidMount()
  useEffect(() => {
    setHeight($(window).height());
    window.addEventListener("resize", updateDimensions);
  }, []);

  function updateDimensions() {
    setHeight($(window).height());
  }

  return (
    <>
      <div className="page" id="top">
        <Navbar />
        <div className="imageContainer bg-dark relative">
          <BannerCarousel height={height} />
        </div>
      </div>
      <section className="row overflow-hidden no-gutters">
        <div className="col-12 col-xl-6">
          <img className="w-100" src="/images/landing/landing1.jpg"></img>
        </div>
        <div className="col-12 col-xl-6 contentContainer text-center">
          <span className='icon-quote'></span>
          <h3 className="headerContent">CULTURE</h3>
          <p className="descContent">
            We are passionate about creating a culture at Morgan Ashley that is
            both peaceful and inspiring. Our hope is to give you an experience
            that will refresh you from the moment you walk through our doors
            until we say goodbye.
          </p>
        </div>
      </section>
      <section
        className="row overflow-hidden no-gutters"
        style={{ "maxHeight": "40rem" }}
      >
        <div className="col-12 col-xl-6 contentContainer text-center">
          <h3 className="headerContent">CRAFT</h3>
          <p className="descContent">
            The craft of hairdressing for us at Morgan Ashley is to produce the
            most precise and personalized look for each client. We believe in
            education being at the core of how we achieve this. We are always
            learning the newest techniques and trends so we can provide you with
            the best! Our team receives in house education as well as being sent
            to New York to attend the most inspiring and creative classes at the
            House of Bumble with our product line Bumble and Bumble.
          </p>
        </div>
        <div className="col-12 col-xl-6">
          <img className="w-100" src="/images/landing/landing2.jpg"></img>
        </div>
      </section>
      <section className="row overflow-hidden no-gutters ">
        <div className="col-12 col-xl-6">
          <img className="w-100" src="/images/landing/landing3.jpg"></img>
        </div>
        <div className="col-12 col-xl-6 contentContainer text-center">
          <h3 className="headerContent">COMMUNITY</h3>
          <p className="descContent">
            We strive to make a difference inside and outside the walls of
            Morgan Ashley by giving back to our community and reaching out to
            those in need around us. We feel so honored to get to partner with
            various ministries and individuals who are making a difference in
            our community. This is us and the heart of Morgan Ashley.
          </p>
        </div>
      </section>
      <section className='reviewsContainer'>
        <ReviewsCarousel/>
      </section>
    </>
  );
};

export default Home;
