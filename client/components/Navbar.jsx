import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="naviContainer">
        <div className="logo"></div>
        <nav className="navi-nav">
          <ul className="navi-list">
            <li>
              <a href="#" className='active'>HOME</a>
            </li>
            <li>
              <a href="#">US</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">CAREERS</a>
            </li>
            <li>
              <a href="#">205-995-2480</a>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
