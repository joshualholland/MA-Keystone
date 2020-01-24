import React from "react";
import Head from 'next/head';
import fetch from "isomorphic-unfetch";

import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import ProductTable from "../client/components/ProductTable";
import Footer from "../client/components/Footer";

import "../client/scss/app.scss";
import "../client/scss/custom/layout/fadeIn.scss"; // This CSS conflicts with bootstrap so it's separated here.

/* PRODUCTION */
let url = "https://morgan-ashley-salon.herokuapp.com"

Services.getInitialProps = async ({ req }) => {
  const servicesRes = await fetch(url + "/api/services");
  const servicesJson = await servicesRes.json();
  const bridalsRes = await fetch(url + "/api/bridals");
  const bridalsJson = await bridalsRes.json();
  const colorsRes = await fetch(url + "/api/color-services");
  const colorsJson = await colorsRes.json();
  const othersRes = await fetch(url + "/api/other-services");
  const othersJson = await othersRes.json();

  return { req: { servicesJson, bridalsJson, colorsJson, othersJson } };
};

function Services({ req }) {
  const services = req.servicesJson.services;
  const color = req.colorsJson.services;
  const other = req.othersJson.services;
  const bridals = req.bridalsJson.bridals;

  return (
    <>
      <Head>
        <title>Morgan Ashley Salon | Services</title>
      </Head>
      <Navbar />
      <Banner
        bannerImage={"/images/services/services-banner.jpg"}
        sectionName={"services"}
        content={"SERVICES"}
      />
      <section className="text-center mt-5 pt-5">
        <h3 className="px-3">We strive to make you feel and look the best!!</h3>
        <p className="px-3 mt-3 container descContent">
          We offer a free consultation for any service we perform. This is a
          time where you can come in and discuss with your stylist what you have
          dreamed of for your hair and can be scheduled directly before your
          appointment time or in advance. Our treat!
        </p>
        <h5 className="mt-4">Cancellation Policy</h5>
        <p className="px-3 mt-3 container descContent">
          We may require a credit card to reserve appointments. In order to
          avoid a service charge, and ensure your appointments for other
          clients, please reschedule or cancel appointments before the 24 hour
          period before your appointment time. 1st occurrence of no show or
          cancellation less than 24 hours: obtain credit card to rebook. 2nd
          occurrence of no show or cancellations less than 24 hours: credit card
          on file will be charged 50% of booked services.
        </p>
      </section>
      <h5 className="text-center productHeader">Services</h5>
      <section className="">
        <ProductTable products={services.length > 0 ? services : []} />
      </section>
      <div className="text-center">
        <h5 className="text-center productHeader">Color, Lightening &amp; Other Chemical Services</h5>
        <p className="text-center productUnder">(Color Services are customized specifically for each individual based on a variety of factors including hair history &amp; overall goal. Therefore, a consultation may be required for new guests to discuss the services needed to reach your desired look)</p>
      </div>
      <section className="">
        <ProductTable products={color.length > 0 ? color : []} />
      </section>
      <h5 className="text-center productHeader">Other Service Offerings</h5>
      <section className="">
        <ProductTable products={other.length > 0 ? other : []} />
      </section>
      <h5 className="text-center productHeader">Bridal &amp; Special Events</h5>
      <section className="mb-5">
        <ProductTable products={bridals.length > 0 ? bridals : []} />
      </section>
      <section className="productsImageContainer">
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
      </section>
      <Footer />
    </>
  );
}

export default Services;
