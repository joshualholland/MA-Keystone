import React, { useState, useEffect } from "react";
import Navbar from "../client/components/Navbar";
import '../client/scss/custom/us/us.scss';

const Us = () => {
  return (
    <>
      <Navbar />
      <section className="page-section bg-dark bg-dark-alfa-30" dataBackground="/images/molly-team.jpg" id="home" style={{ backgroundImage: 'url("/images/molly-team.jpg")' }}>
        <div className="relative container">
          <div className="home-content">
            <div className="home-text">
              <h1 className="hs-line-14 font-alt mb-0">Meet our team</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Us;