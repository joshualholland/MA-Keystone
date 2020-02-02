import React from "react";
import Head from 'next/head';
import fetch from "isomorphic-unfetch";

import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import Footer from "../client/components/Footer";

import "../client/scss/app.scss";
import "../client/scss/custom/layout/fadeIn.scss"; // This CSS conflicts with bootstrap so it's separated here.

/* PRODUCTION */
let url = "https://morgan-ashley-salon.herokuapp.com"

const services = () => {
  return (
    <>
      <Head>
        <title>Morgan Ashley Salon | Brands</title>
      </Head>
      <Navbar />
      <Banner
        bannerImage={"/images/services/products.jpg"}
        sectionName={"services"}
        content={"SERVICES"}
      />
      <section id="brands">

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


export default Services;
