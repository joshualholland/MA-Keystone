import React, { useEffect } from "react";

export default function ReviewsCarousel() {
  //componentDidMount()
  // useEffect(() => {
  //   $("#reviewsCarousel").carousel("pause");
  // }, []);

  return (
    <div
      id="reviewsCarousel"
      className="carousel slide row no-gutters"
      // data-ride="carousel"
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
            I have never had a better hair cut experience than at Morgan
            Ashley... Not only did I leave with a great cut, but I felt
            beautiful and confident.
          </p>
          <footer className="wpsAuthor">ELLEN DEWITT</footer>
        </div>
        <div className="carousel-item rcItem">
          <div className="icon-quote">
            <img height="32" width="32" src="/images/landing/quotesIcon.png" />
          </div>
          <h3 className="wpsHeader">WHAT PEOPLE SAY</h3>
          <p className="wpsContent">
            It is always a cool, fun and relaxing place to get my hair done. I
            would never go anywhere else.
          </p>
          <footer className="wpsAuthor">MEGHAN LEVANT</footer>
        </div>
        <div className="carousel-item rcItem">
          <div className="icon-quote">
            <img height="32" width="32" src="/images/landing/quotesIcon.png" />
          </div>
          <h3 className="wpsHeader">WHAT PEOPLE SAY</h3>
          <p className="wpsContent">
            Everyone is so nice and goes the extra mile to make sure your
            experience is comfortable and VIP. From complimentary coffee to
            comfy couches, going to Morgan Ashley is a relaxing experience.
          </p>
          <footer className="wpsAuthor">COURTNEY HANCOCK</footer>
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
