import React, { Component } from "react";
import Head from 'next/head';
import NumberFormat from 'react-number-format';
import axios from 'axios';

import Banner from "../client/components/Banner";
import Navbar from "../client/components/Navbar";
import Footer from "../client/components/Footer";
import GoogleJSMap from "../client/components/GoogleJSMap";
import ConfirmMessage from "../client/components/ConfirmMessage";

import "../client/scss/app.scss";
import "../client/scss/custom/layout/fadeIn.scss"; // This CSS conflicts with bootstrap so it's separated here.
import CovidAlert from "../client/components/CovidAlert";

export default class Careers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      desiredPosition: "",
      desiredHours: "",
      message: "",
      reason: "",
      selectedFile: null,
      crayon: ""
    };
  }

  handleFileChange = async e => {
    e.preventDefault();
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('phone', this.state.phone);
    data.append('desiredPostion', this.state.desiredPosition);
    data.append('desiredHours', this.state.desiredHours);
    data.append('message', this.state.message);
    data.append('reason', this.state.reason);
    data.append('file', this.state.selectedFile);
    data.append('crayon', this.state.crayon);

    const header = {
      'Content-Type': 'multipart/form-data'
    }

    console.log(data)

    axios.post('/api/careers', data, {
      headers: header
    }).then(res => {
      console.log(res);
      $(".maSubmit").toggle();
        $("#confirmMessage").addClass("active");
    });
  };

  render() {
    return (
      <>
        <Head>
          <title>Morgan Ashley Salon | Careers</title>
        </Head>
        <CovidAlert />
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
                  <NumberFormat
                        format="+1 (###) ###-####"
                        mask="_"
                        type="tel"
                        name="phone"
                        id="phoneForm"
                        placeholder="Phone"
                        className="form-control"
                        onChange={e => {
                          this.setState({ phone: e.target.value })
                        }}
                  />
                  <select
                    type="select"
                    className="form-control"
                    id="positionForm"
                    placeholder="Desired Position"
                    onChange={e => {
                      this.setState({ desiredPosition: e.target.value });
                    }}
                    required
                  >
                    <option defaultValue="" disabled selected>Select Desired Position</option>
                    <option>Receptionist</option>
                    <option>Management</option>
                    <option>Shampoo Technician</option>
                    <option>Associate Stylist</option>
                    <option>Stylist</option>
                  </select>
                  <select
                    type="select"
                    className="form-control"
                    id="hoursForm"
                    placeholder="Desired Hours"
                    onChange={e => {
                      this.setState({ desiredHours: e.target.value });
                    }}
                    required
                  >
                    <option defaultValue="" disabled selected>Select Desired Hours</option>
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Whatever is Available!</option>
                  </select>
                  <input
                  type="file"
                  className="form-control"
                  id="resumeForm"
                  placeholder="Upload resume if you have one!"
                  onChange={e => {
                    this.handleFileChange(e);
                  }} />
                </div>
                <div className="col-12 col-lg-6" id="messageContainer">
                  <textarea
                    type="name"
                    className="form-control"
                    rows="4"
                    id="messageForm"
                    placeholder="Tell us a little bit about yourself. We love fun facts!"
                    onChange={e => {
                      this.setState({ message: e.target.value });
                    }}
                    required
                  />
                  <textarea
                    type="name"
                    className="form-control"
                    rows="4"
                    id="reasonForm"
                    placeholder="Tell us your reason for choosing Morgan Ashley!"
                    onChange={e => {
                      this.setState({ reason: e.target.value });
                    }}
                    required
                  />
                  <textarea
                    type="name"
                    className="form-control"
                    rows="4"
                    id="crayonForm"
                    placeholder="Okay... enough with the serious questions. Here's a fun one! 
                    You're a new addition to the crayon box. What color would you be &amp; why? "
                    onChange={e => {
                      this.setState({ crayon: e.target.value });
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
