import React, { Component } from "react";
import Head from 'next/head';
import Banner from "../client/components/Banner";
import Navbar from "../client/components/Navbar";
import Footer from "../client/components/Footer";
import "../client/scss/app.scss";
import "../client/scss/custom/layout/fadeIn.scss";
import GoogleJSMap from "../client/components/GoogleJSMap";
import ConfirmMessage from "../client/components/ConfirmMessage";

export default class Careers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      desiredPosition: "",
      message: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then((response) => {
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
        <Head>
          <title>Morgan Ashley Salon | Careers</title>
        </Head>
        <Navbar />
        <Banner
          bannerImage="/images/careers/banner.jpg"
          sectionName="careers"
          content="CAREERS"
        />
        <ConfirmMessage />
        <div className="careersContainer">
          <h5 className="careersHeader mx-0 my-5">
            Interested in joining our team? Tell us a little bit about yourself
          </h5>
          <form
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className="form-group">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <input
                    type="name"
                    className="form-control"
                    id="nameForm"
                    placeholder="Name"
                    onChange={e => {
                      this.setState({ name: e.target.value });
                    }}
                    required
                  />
                  <input
                    type="email"
                    className="form-control"
                    id="emailForm"
                    placeholder="Email"
                    onChange={e => {
                      this.setState({ email: e.target.value });
                    }}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="positionForm"
                    placeholder="Desired Position"
                    onChange={e => {
                      this.setState({ desiredPosition: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="col-12 col-lg-6" id="messageContainer">
                  <textarea
                    type="name"
                    className="form-control"
                    id="messageForm"
                    placeholder="Message"
                    onChange={e => {
                      this.setState({ message: e.target.value });
                    }}
                    required
                  />
                </div>
              </div>
              <div className="row justify-content-between mt-3">
                <div className="col-3 allFieldsRequired">
                  <i className="fa fa-info-circle"> All fields are required</i>
                </div>
                <div className="col-6 col-lg-3" id="submitContainer">
                  <button type="submit" className="btn maSubmit">
                    SUBMIT
                  </button>
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
}
