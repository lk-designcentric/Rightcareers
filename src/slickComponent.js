import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SlickComponent() {
  var settings = {
    arrows: false,
    nav: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    cssEase: 'linear',
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    marginRight: 15,
    marginLeft: 15
  };
  var settingsNewSlide = {
    arrows: false,
    nav: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    cssEase: 'linear',
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    rtl: true
  };

  return (
    <>
      <div style={{maxWidth: '80%', margin: 'auto'}} className="container">
        <Slider {...settings}>
          <div className="card">
            <img src="https://www.vrajindia.com/wp-content/themes/vraj/images/logo.png" alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/EY.png')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/microsoft.webp')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/BAJAJ.png')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/BAJAJ.png')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/BAJAJ.png')} alt="" className="w-100"></img>
          </div>
        </Slider>
      </div>
      <div style={{maxWidth: '80%', margin: 'auto'}} className="container-opp-direct">
        <Slider {...settingsNewSlide}>
          <div className="card">
            <img src={require('./img/BAJAJ.png')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/EY.png')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/microsoft.webp')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/BAJAJ.png')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/BAJAJ.png')} alt="" className="w-100"></img>
          </div>
          <div className="card">
            <img src={require('./img/BAJAJ.png')} alt="" className="w-100"></img>
          </div>
        </Slider>
      </div>
      <Link to="/demo">Demo Layout</Link>
    </>
  );
}