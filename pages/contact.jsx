import React from "react";
import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import "../client/scss/app.scss";
import CallUs from "../client/components/CallUs";
import Address from "../client/components/Address";
import Email from "../client/components/Email";
import Footer from "../client/components/Footer";
import GoogleJSMap from "../client/components/GoogleJSMap";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Banner
        bannerImage={"/images/contact/banner.jpg"}
        sectionName="contact"
        content="CONTACT"
      />
      <div className="container slimContainer">
        <h3 className="mt-5">
          Reach out to us with questions or requests! We would love to get to
          know you and help however we can!
        </h3>
        <div className="row">
          <div className="col-sm-12 mt-3 mb-4 mt-lg-5 col-lg-6">
            <CallUs />
          </div>
          <div className="col-sm-12 mb-4 mt-lg-5 col-lg-6">
            <Address />
          </div>
          <div className="col-sm-12 mb-4 col-lg-6">
            <Email />
          </div>
        </div>
        <form className='my-5'>
          <div className="row form-group">
            <div className="col-12 col-lg-6">
              <input
                type="name"
                className="form-control"
                id="nameForm"
                placeholder="NAME"
                required
              />
              <input
                type="email"
                className="form-control"
                id="emailForm"
                placeholder="EMAIL"
                required
              />
            </div>
            <div className="col-12 col-lg-6">
              <textarea
                type="message"
                className="form-control mt-2 mt-xl-0"
                id="messageForm"
                placeholder="MESSAGE"
                required
              />
            </div>
          </div>
          <div className="row justify-content-between mb-5">
            <div className="col-2 allFieldsRequired">
              <i className="fa fa-info-circle"> All fields are required</i>
            </div>
            <div className="col-4 col-lg-2">
              <input type="submit" className="btn maSubmit" value="SUBMIT" />
            </div>
          </div>
        </form>
      </div>
      <GoogleJSMap/>
      <Footer />
    </>
  );
}
