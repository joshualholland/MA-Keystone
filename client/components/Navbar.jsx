import React, { useEffect } from "react";
import $ from "jquery";

const Navbar = () => {
  // Turns the dropdown menu on and off with display:block/none
  function toggleMenu(event) {
    $("#navi-nav").fadeToggle();
  }

  // This will get called everytime a scroll event occurs [0,...] = [top, ...]
  function handleScroll(e) {
    const x = window.pageYOffset;
    if (window.pageYOffset > 0) {
      minimize();
    } else {
      maximize();
    }
  }
  function maximize() {
    const naviContainer = document.getElementById("naviContainer");
    const navi_nav = document.getElementById("navi-nav");
    const navi_links = $(".navi-link");
    const logo = document.getElementById("logo");
    const menuToggle = document.getElementById("menu-toggle");

    // navBarMaximize Animation (height / color)
    naviContainer.className = "animated navBarMaximize colorTransparent";
    // Separating color change animation prevents weird rendering bug
    navi_nav.className = "animated navBarMaximize mobilePullDown";
    navi_links.removeClass("navBarMinimize").addClass("navBarMaximize");
    // Logo Height =/= navBar height so done separately
    logo.className = "animated logoMaximize";
    // Menu-Toggler Height
    menuToggle.className = "animated navBarMaximize";
  }

  function minimize() {
    const naviContainer = document.getElementById("naviContainer");
    const navi_nav = document.getElementById("navi-nav");
    const navi_links = $(".navi-link");
    const logo = document.getElementById("logo");
    const menuToggle = document.getElementById("menu-toggle");

    // navBarMinimize Animation (height / color)
    naviContainer.className = "animated navBarMinimize colorChange";
    // Separating color change animation prevents weird rendering bug
    navi_nav.className = "animated navBarMinimize mobilePullUp";
    navi_links.removeClass("navBarMaximize").addClass("navBarMinimize");
    // Logo Height =/= navBar height so done separately
    logo.className = "animated logoMinimize";
    // Menu-Toggler Height
    menuToggle.className = "animated navBarMinimize";
  }

  // Component Did Mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="naviContainer">
        <div className="logoContainer">
          <div id="logo">
            <img className="imageFit" src="/images/mamarque.svg"></img>
          </div>
        </div>
        <nav id="navi-nav">
          <ul className="navi-list">
            <li>
              <a href="#" className="navi-link animated active">
                HOME
              </a>
            </li>
            <li>
              <a className="navi-link animated heightAnimate" href="#">
                US
              </a>
            </li>
            <li>
              <a className="navi-link animated heightAnimate" href="#">
                SERVICES
              </a>
            </li>
            <li>
              <a className="navi-link animated heightAnimate" href="#">
                CONTACT
              </a>
            </li>
            <li>
              <a className="navi-link animated heightAnimate" href="#">
                CAREERS
              </a>
            </li>
            <li>
              <a className="navi-link animated heightAnimate" href="#">
                205-995-2480
              </a>
            </li>
            <li>
              <a
                className="navi-link animated sm_icons"
                href="https://www.facebook.com/Morgan-Ashley-Studio-Salon-1831296120421943/"
              >
                <span
                  className="mn-soc-link tooltip-bot"
                  title=""
                  data-original-title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </span>
              </a>
              <a className="navi-link animated sm_icons" href="#">
                <span className="mn-soc-link tooltip-bot" title="Instagram">
                  <i className="fa fa-instagram"></i>
                </span>
              </a>
              <a
                className="navi-link animated sm_icons"
                href="https://www.pinterest.com/morgansalon"
              >
                <span className="mn-soc-link tooltip-bot" title="Pinterest">
                  <i className="fa fa-pinterest"></i>
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="menu-toggle animated"
          id="menu-toggle"
          onClick={toggleMenu}
        >
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    </>
  );
};

const style = {
  position: "absolute",
  top: "14rem",
  zIndex: "2005"
};

const style2 = {
  position: "absolute",
  top: "18rem",
  zIndex: "2005"
};

export default Navbar;
