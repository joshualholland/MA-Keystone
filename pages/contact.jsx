import React, { Component } from "react";
import Head from "next/head";

import Navbar from "../client/components/Navbar";
import Banner from "../client/components/Banner";
import CallUs from "../client/components/CallUs";
import Address from "../client/components/Address";
import Email from "../client/components/Email";
import Footer from "../client/components/Footer";
import GoogleJSMap from "../client/components/GoogleJSMap";
import ConfirmMessage from "../client/components/ConfirmMessage";
import ContactModal from "../client/components/ContactModal";
import CancellationModal from "../client/components/CancellationModal";

import "../client/scss/app.scss";
import "../client/scss/custom/layout/fadeIn.scss"; // This CSS conflicts with bootstrap so it's separated here.

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  // This will submit form data to the backend for the contact page
  handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(e => {
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
          <title>Morgan Ashley Salon | Contact</title>
        </Head>
        <Navbar />
        <Banner
          bannerImage={"/images/contact/banner.jpg"}
          sectionName="contact"
          content="CONTACT"
        />
        
        <ConfirmMessage />
        <div className="container slimContainer">
          <h3 className="mt-5">
            We strive to make you look &amp; feel your best. Reach out to us with questions or requests! We'd love to help you however we can!
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
          <form onSubmit={this.handleSubmit.bind(this)} className="mb-5">
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
                  rows={4}
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
          <div class="consultation-container">
            <button type="button" class="contact-info-buttons" data-toggle="modal" data-target="#contactModal">Consultations</button>
            <button type="button" class="contact-info-buttons" data-toggle="modal" data-target="#cancellationModal">Cancellation Policy</button>
          </div>
        </div>
        <GoogleJSMap />
        <Footer />
        <ContactModal 
            title={"Consultations"}
            text={"We offer a free consultation for any service we perform. This is a time where you can come in and discuss with your stylist what you have dreamed of for your hair and can be scheduled directly before your appointment time or in advance. Our treat!"}
          />
        <CancellationModal 
          title={"Cancellation Policy"}
          text={"We may require a credit card to reserve appointments. In order to avoid a service charge, and ensure your appointments for other clients, please reschedule or cancel appointments before the 24 hour period before your appointment time. 1st occurrence of no show or cancellation less than 24 hours: obtain credit card to rebook. 2nd occurrence of no show or cancellations less than 24 hours: credit card on file will be charged 50% of booked services."}
        />
      </>
    );
  }
}
