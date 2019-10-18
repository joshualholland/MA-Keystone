import React from "react";
import Banner from "../client/components/Banner";
import Navbar from "../client/components/Navbar";
import Footer from "../client/components/Footer";
import "../client/scss/app.scss";
import GoogleJSMap from "../client/components/GoogleJSMap";

export default function Careers() {
  return (
    <>
      <Navbar />
      <Banner
        bannerImage="/images/careers/banner.jpg"
        sectionName="careers"
        content="CAREERS"
      />
      <div className="careersContainer">
        <h5 className="careersHeader mx-0 mb-5">
          Interested in joining our team? Tell us a little bit about yourself
        </h5>
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col-12 col-lg-6">
                <input
                  type="name"
                  className="form-control"
                  id="nameForm"
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  id="emailForm"
                  placeholder="Email"
                  required
                />
                <input
                  type="name"
                  className="form-control"
                  id="positionForm"
                  placeholder="Desired Position"
                  required
                />
              </div>
              <div className="col-12 col-lg-6" id="messageContainer">
                <textarea
                  type="name"
                  className="form-control"
                  id="messageForm"
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-3 allFieldsRequired">
                <i className="fa fa-info-circle"> All fields are required</i>
              </div>
              <div className="col-3" id="submitContainer">
                <input
                  type="submit"
                  className="btn maSubmit"
                  value="SUBMIT"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
      <GoogleJSMap />
      <Footer />
    </>
  );
}
