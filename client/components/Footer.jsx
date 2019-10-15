import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <>
    <footer className='footerContainer'>
      <section className="row ml-4 pt-5 no-gutters">
        <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
          <img
            className="footerIcon mr-3 mb-md-3"
            src="/images/landing/phoneIcon.png"
          ></img>
          <div className="infoContainer">
            <h5 className="footerHeaders">CALL US</h5>
            <p className="footerInfo">205 995 2480</p>
          </div>
        </div>
        <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
          <img
            className="footerIcon mr-3 mb-md-3"
            src="/images/landing/emailIcon.png"
          ></img>
          <div className="infoContainer">
            <h5 className="footerHeaders">EMAIL</h5>
            <p style={{fontSize:'0.6rem'}}className="footerInfo">info@morganashleysalon.com</p>
          </div>
        </div>
        <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
          <img
            className="footerIcon mr-3 mb-md-3"
            src="/images/landing/mapIcon.png"
          ></img>
          <div className="infoContainer">
            <h5 className="footerHeaders">ADDRESS</h5>
            <p className="footerInfo">7350 Cahaba Valley Rd,</p>
            <p className="footerInfo"> Birmingham</p>
          </div>
        </div>
        <div className="col-sm-12 mb-3 col-md-6 col-xl-3">
          <img
            className="footerIcon mr-3 mb-md-3"
            src="/images/landing/timeIcon.png"
          ></img>
          <div className="infoContainer">
            <h5 className="footerHeaders">WE ARE OPEN</h5>
            <p className="footerInfo">Monday-Thursday: 8am to 8pm</p>
            <p className="footerInfo">Friday: 9am to 5pm</p>
            <p className="footerInfo">Saturday: 9am to 4pm</p>
          </div>
        </div>
      </section>
      <hr style={{width:'80vw'}}></hr>
      <section className='container'>
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
        <p className='creditInfo'>Made with love by Morgan, Daniel, Josh and Nitish</p>
      </section>
      </footer>
    </>
  );
}
