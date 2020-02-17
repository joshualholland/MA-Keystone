import React, { Component } from "react";
import Head from 'next/head';
import { Link, animateScroll as scroll } from "react-scroll";
import Loader from "react-loader";
import anime from "animejs";

import Navbar from "../client/components/Navbar";
import BannerCarousel from "../client/components/BannerCarousel";
import ReviewsCarousel from "../client/components/ReviewsCarousel";
import Footer from "../client/components/Footer";

import "../client/scss/app.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: "",
      isLoading: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  wait = async () => {
    await this.updateWindowDimensions();
    await anime({ // This makes the page fade in properly
      targets: "body",
      opacity: [0, 1],
      duration: 3000
    });
    await this.setState({
      isLoading: false
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    this.wait();
  }

  // This allows for the first picture carousel to always match the height of the window.
  updateWindowDimensions() {
    this.setState({ height: window.innerHeight });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    if (this.state.isLoading) return <Loader />;
    return (
      <>
        <Head>
          <title>Morgan Ashley Salon</title>
        </Head>
        <div className="page" id="top">
          <Navbar />
          <div className="imageContainer bg-dark relative">
            <BannerCarousel height={this.state.height} />
            <img id="malogo" src="/images/landing/malogo.svg" />
            <img id="addressHeader" src="/images/landing/WORKPLZ.svg" />
            <Link
              to="culture"
              className="scroll-down"
              smooth={true}
              offset={-90}
              duration={800}
            >
              <i
                className="fa fa-angle-down scroll-down-icon"
                id="scrollLink"
              ></i>
            </Link>
          </div>
        </div>
        <section className="row overflow-hidden no-gutters " id="firstSection">
          <div className="col-12 col-xl-6">
            <img className="w-100" src="/images/landing/motivation.jpg"></img>
          </div>
          <div className="col-12 col-xl-6 contentContainer text-center">
            <div className="row text-center mt-xl-5 pt-xl-5">
              <h3 className="headerContent text-center col-12" id="culture">
                PURPOSE
              </h3>
              <p className="descContent mt-xl-5">
                We strive to serve others and our community by delivering excellence in all aspects of the services we provide through our salon.  We know you have a choice in where you go and we're glad you're here!
              </p>
            </div>
          </div>
        </section>
        <section className="row overflow-hidden no-gutters ">
          <div className="col-12 col-xl-6 order-1 order-xl-0 contentContainer text-center">
            <div className="row mt-xl-5">
              <h3 className="col-12 headerContent text-center">MOTIVATION &amp; IMPACT</h3>
            </div>
            <p className="descContent">
              We commit to providing hospitality to each and every one of you who walk through our doors.  Ensuring the highest level of client care and creating an unforgettable experience is at the heart of why we do what we do!
            </p>
          </div>
          <div className="col-12 col-xl-6">
            <img
              // id="tallPhoto"
              className="w-100 order-0"
              src="/images/landing/MorganAshley_Fall19Shoot1-0079.jpg"
            ></img>
          </div>
        </section>
        <section className="row overflow-hidden no-gutters ">
          <div className="col-12 col-xl-6">
            <img className="w-100" src="/images/landing/community.jpg"></img>
          </div>
          <div className="col-12 col-xl-6 contentContainer text-center">
            <div className="row text-center mt-xl-5">
              <h3 className="headerContent col-12 mt-xl-3">ALWAYS LEARNING</h3>
            </div>
            <p className="descContent">
              From coloring to cut &amp; styling, our stylists are up to date with the latest trends & techniques in the industry.  Our aim is to create a look that is uniquely yours and to provide you with the tools to recreate your new style at home.
            </p>
          </div>
        </section>
        <section className="row no-gutters reviewsContainer">
          <ReviewsCarousel />
        </section>
        <section className="row no-gutters followContainer">
          <a
            className="d-block w-100 h-100"
            href="https://www.instagram.com/accounts/login/?next=%2Fmorganashleysalon%2F&source=follow"
          >
            <div className="col-12">
              <p className="followText">Follow</p>
              <img id="mamaDark" src="/images/landing/mamarque_dark.svg"></img>
              <p className="followText">On Instagram</p>
            </div>
          </a>
        </section>
        <Footer />
      </>
    );
  }
}
