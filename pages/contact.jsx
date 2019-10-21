import React, { Component } from "react";
import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import "../client/scss/app.scss";
import CallUs from "../client/components/CallUs";
import Address from "../client/components/Address";
import Email from "../client/components/Email";
import Footer from "../client/components/Footer";
import GoogleJSMap from "../client/components/GoogleJSMap";
import ConfirmMessage from "../client/components/ConfirmMessage";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then((e) => {
        $(".maSubmit").toggle();
        $("#confirmMessage").addClass("active");
      });
    } catch (e) {
      throw e;
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <Banner
          bannerImage={"/images/contact/banner.jpg"}
          sectionName="contact"
          content="CONTACT"
        />
        <ConfirmMessage />
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
          <form onSubmit={this.handleSubmit.bind(this)} className="my-5">
            <div className="row form-group">
              <div className="col-12 col-lg-6">
                <input
                  type="name"
                  className="form-control"
                  id="nameForm"
                  placeholder="NAME"
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  id="emailForm"
                  placeholder="EMAIL"
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="col-12 col-lg-6">
                <textarea
                  type="message"
                  className="form-control mt-2 mt-xl-0"
                  id="messageForm"
                  placeholder="MESSAGE"
                  onChange={e => {
                    this.setState({ message: e.target.value });
                  }}
                  required
                />
              </div>
            </div>
            <div className="row justify-content-between mb-5">
              <div className="col-2 allFieldsRequired">
                <i className="fa fa-info-circle"> All fields are required</i>
              </div>
              <div className="col-6 col-lg-3">
                <button type="submit" className="btn maSubmit" value="SUBMIT">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
        <GoogleJSMap />
        <Footer />
      </>
    );
  }
}
