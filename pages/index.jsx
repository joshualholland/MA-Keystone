import React from "react";
import Navbar from '../client/components/Navbar';
import "../client/scss/app.scss"

const image = require('../images/007.jpg')

const Home = () => {
  return (
    <>
    <img src={image}></img>
    <div className='test'>Hello</div>
    </>
  );
};

export default Home;
