import React, { useState, useEffect } from "react";
import Navbar from "../client/components/Navbar";
import BannerCarousel from "../client/components/BannerCarousel";
import ReviewsCarousel from "../client/components/ReviewsCarousel";
import Footer from "../client/components/Footer";
import "../client/scss/app.scss";

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
          <img id='malogo' src='/images/landing/malogo.svg'/>
          <img id='addressHeader' src='/images/landing/WORKPLZ.svg'/>
          {/* <div id='landingAddressHeader'>7350 CAHABA VALLEY RD, BIRMINGHAM</div> */}
        </div>
      </div>
      <section className="row overflow-hidden no-gutters">
        <div className="col-12 col-xl-6">
          <img className="w-100" src="/images/landing/landing1.jpg"></img>
        </div>
        <div className="col-12 col-xl-6 contentContainer text-center">
          <span className="icon-quote"></span>
          <h3 className="headerContent">CULTURE</h3>
          <p className="descContent">
            We are passionate about creating a culture at Morgan Ashley that is
            both peaceful and inspiring. Our hope is to give you an experience
            that will refresh you from the moment you walk through our doors
            until we say goodbye.
          </p>
        </div>
      </section>
      <section className="row overflow-hidden no-gutters">
        <div className="col-12 col-xl-6 order-1 order-xl-0 contentContainer text-center">
          <div className='row'>
            <img className='offset-2 col-2 craftIcons' 
            src='/images/landing/icon-1.png'></img>
            <h3 className="col-4 headerContent">CRAFT</h3>
            <img className='col-2 craftIcons' 
            src='/images/landing/icon-2.png'></img>
          </div>
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
          <img
            id="tallPhoto"
            className="w-100 order-0"
            src="/images/landing/landing2.jpg"
          ></img>
        </div>
      </section>
      <section className="row overflow-hidden no-gutters">
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
      <section className="row no-gutters reviewsContainer">
        <ReviewsCarousel />
      </section>
      <section className="row no-gutters followContainer">
        <div className="col-12">
          <p className="followText">Follow</p>
          <img id="mamaDark" src="/images/landing/mamarque_dark.svg"></img>
          <p className="followText">On Instagram</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
