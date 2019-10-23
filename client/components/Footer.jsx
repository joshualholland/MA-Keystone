import React from "react";
import CallUs from "./CallUs";
import Email from "./Email";
import Address from "./Address";

export default function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <section className="row ml-4 pt-5 no-gutters">
          <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
            <CallUs />
          </div>
          <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
            <Email />
          </div>
          <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
            <Address />
          </div>
          <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
            <img
              className="footerIcon mr-3 mb-md-3"
              src="/images/landing/timeIcon.png"
            ></img>
            <div className="infoContainer">
              <h5 className="footerHeaders">WE ARE OPEN</h5>
              <p className="footerInfo">Monday-Thursday: </p>
              <p className="footerInfo">8am to 8pm</p>
              <p className="footerInfo">Friday: </p>
              <p className="footerInfo">9am to 5pm</p>
              <p className="footerInfo">Saturday: </p>
              <p className="footerInfo">9am to 4pm</p>
            </div>
          </div>
        </section>
        <hr style={{ width: "80vw" }}></hr>
        <section className="container">
          <div className="row no-gutter">
            <div className="offset-5 col-1">
              <a
                href="https://www.facebook.com/Morgan-Ashley-Studio-Salon-1831296120421943/"
                title="Facebook"
                target="_blank"
                className="footerSMLinks"
              >
                <i className="fa fa-facebook footerSM"></i>
              </a>
            </div>
            <div className="col-1">
              <a
                href="https://instagram.com/morganashleysalon"
                title="Instagram"
                target="_blank"
                className="footerSMLinks"
              >
                <i className="fa fa-instagram footerSM"></i>
              </a>
            </div>
            <div className="col-1">
              <a
                href="https://pinterest.com/morgansalon"
                title="Pinterest"
                target="_blank"
                className="footerSMLinks"
              >
                <i className="fa fa-pinterest footerSM"></i>
              </a>
            </div>
          </div>
          <p className="creditInfo">
            Made by Josh and Nitish
          </p>
        </section>
      </footer>
    </>
  );
}
