import React from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import Frame1 from "../../../images/landingPageImages/Frames/Frame1.webp";
import './styles.scss';
import { placementsData } from "./data";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import AlumniCarousal from "../../MLPMainComp/Placements/AlumniCarousal";

const Index = () => {
  const settings = {
    prevArrow: "",
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lp-alumni">
      <div className="lp-alumni-hero">
        <div className="l-alumni-head">
          #1 Digital Marketing Course in India for <br />
          learning, placements and alumni community
        </div>
        <img src={underline} className="lp-a-underline" alt="" />
        <div className="l-a-desc">
          Kraftshala is <span className="i-desc-ylo">5X</span> better on
          placements than any other online or offline Digital Marketing
          Institute
        </div>
        <div className="l-a-check">
          Check it out for yourself:{" "}<br className="pc-none"/>
          <span className="l-a-check-ylo">
            Go to Linkedin &gt; Institute <br className="pc-none"/> Company Page &gt; Alumni Section
          </span>
        </div>
        <div className="l-a-sub-desc">
          Calculate % of alumni placed in top companies.
          <em>
            (In the screenshots below we have blurred <br /> out the names of
            other courses)
          </em>
        </div>
      </div>

      <div className="l-a-container-flex">
        <div className="l-a-carousel-sec">
          <img className="l-a-main-img" src={Frame1} loading="lazy" />
          <div className="csm-part-time lp-page-slider">
            <div className="placement-slider">
              <LazyLoad>
                <Slider {...settings}>
                  {placementsData.map((info, key) => (
                    <img src={info} className="l-a-slide-img" loading="lazy" />
                  ))}
                </Slider>
              </LazyLoad>
            </div>
          </div>
        </div>
        <div className="l-a-text-sec">
          <div className="l-a-t-head">
            That is why Marketing Launchpad is the top choice of students
            looking for:
          </div>
          <ul className="l-a-t-list">
            <li>Digital Marketing course with placements</li>
            <li>Online Digital Marketing course</li>
            <li> Digital Marketing Certification course</li>
            <li> Digital Marketing institute</li>
            <li>Digital Marketing institute in Delhi</li>
            <li> Digital Marketing course in Mumbai</li>
            <li> Digital Marketing institute in Bangalore</li>
            <li> Digital Marketing course in India</li>
            <li> Best course to pursue in Marketing</li>
            <li> Best SEO course with placements</li>
            <li> Best Performance Marketing course </li>
            <li> Best E commerce course with placements</li>
          </ul>
        </div>
      </div>

      <div className="l-a-slider-container">
        <AlumniCarousal hide={true}/>
      </div>
    </div>
  );
};

export default Index;
