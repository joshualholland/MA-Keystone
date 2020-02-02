import React, { useEffect } from "react";

export default function ReviewsCarousel() {

  return (
    <div
      id="reviewsCarousel"
      className="carousel slide row no-gutters"
      data-interval="3000"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#reviewsCarousel" data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#reviewsCarousel" data-slide-to="1"></li>
        <li data-target="#reviewsCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" id="reviewCarouselInner">
        <div className="carousel-item rcItem active">
          <div className="icon-quote">
            <img height="32" width="32" src="/images/landing/quotesIcon.png" />
          </div>
          <h3 className="wpsHeader">WHAT PEOPLE SAY</h3>
          <p className="wpsContent">
            I have such great things to say about Morgan Ashley Salon! I've been going here for 10 years and have never had any complaints! Everyone is always so warm, welcoming and professional. I moved to Atlanta a few years ago and I still make the drive to get my hair done. I couldn't imagine going anywhere else! Awesome stylists!
          </p>
          <footer className="wpsAuthor">Andi Buie</footer>
        </div>
        <div className="carousel-item rcItem">
          <div className="icon-quote">
            <img height="32" width="32" src="/images/landing/quotesIcon.png" />
          </div>
          <h3 className="wpsHeader">WHAT PEOPLE SAY</h3>
          <p className="wpsContent">
            I am so grateful for a salon like Morgan Ashley Salon. From first being greeted when I walk in the door, to cut, color, and being styled out, everything is done in kindness and with excellence. There is no place like it in Birmingham.
          </p>
          <footer className="wpsAuthor">Nedra Springer</footer>
        </div>
        <div className="carousel-item rcItem">
          <div className="icon-quote">
            <img height="32" width="32" src="/images/landing/quotesIcon.png" />
          </div>
          <h3 className="wpsHeader">WHAT PEOPLE SAY</h3>
          <p className="wpsContent">
            From the proficient greeters at the front desk, to the shampoo girls' skilled expertise, to the stylists' masterful hair-care knowledge, to the behind the scenes support staff- one becomes a confident client.
          </p>
          <footer className="wpsAuthor">Dolores S. Taylor </footer>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#reviewsCarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        className="carousel-control-next"
        href="#reviewsCarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
}
