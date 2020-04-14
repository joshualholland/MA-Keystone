import React from "react";
import Head from 'next/head';
import fetch from "isomorphic-unfetch";

import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import Footer from "../client/components/Footer";

import "../client/scss/app.scss";
import "../client/scss/custom/layout/fadeIn.scss"; // This CSS conflicts with bootstrap so it's separated here.
import CovidAlert from "../client/components/CovidAlert";

/* PRODUCTION */
let url = "https://morgan-ashley-salon.herokuapp.com"

const services = () => {
  return (
    <>
      <Head>
        <title>Morgan Ashley Salon | Brands</title>
      </Head>
      <CovidAlert />
      <Navbar />
      <Banner
        bannerImage={"/images/services/products.jpg"}
        sectionName={"brands"}
        content={"BRANDS"}
      />
      <section id="brands">
        <div class="product-header">
          <h3>PRODUCTS</h3>
          <p>We know it’s important to give you the best! Partnering with brands who are like-minded in
            culture &amp; education is essential to us. We believe these brands to be exceptional in their focus
            on product performance- while doing good for the community and the environment.</p>
        </div>
        <div class="product-logos">
          <div class="davine-logo">
            <img src="/images/services/davines-logo-black.svg"/>
            <a class="learn-more" target="_blank" href="https://us.davines.com/">Learn More</a>
          </div>

          <div class="davine-logo">
            <img src="/images/services/kevin-murphy.jpg" />
            <a class="learn-more" target="_blank" href="https://kevinmurphy.com.au/">Learn More</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

{/* <section className="productsImageContainer">
        <div
          className="w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <h5 className="px-3 pt-5 productsImageHeader">
            ENJOY AN UNFORGETTABLE SALON EXPERIENCE
            </h5>
          <button className="btn bookButton my-4">
            <a href="/contact" style={{ textDecoration: "none !important" }}>
              BOOK AN APPOINTMENT
              </a>
          </button>
        </div>
      </section> */}


export default services;
