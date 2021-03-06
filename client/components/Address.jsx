import React from "react";

export default function Address() {
  return (
    <>
      <a href="https://goo.gl/maps/wrHQDQ3nYMn84EJVA" style={{textDecoration:"none"}}>
        <img
          className="footerIcon mr-3 mb-md-3"
          src="/images/landing/mapIcon.png"
        ></img>
        <div className="infoContainer">
          <h5 className="footerHeaders">ADDRESS</h5>
          <p className="address">7350 Cahaba Valley Rd,</p>
          <p className="address"> Birmingham</p>
        </div>
      </a>
    </>
  );
}
