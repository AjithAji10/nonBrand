import React from "react";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";
import { trainersImages } from "./data";

import "./styles.scss";

function Trainers() {
  const settings = {
    dots: false,
    infinite: false,
    type: Boolean,
    default: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="mlp-main-trainers">
      <div className="will-be-training mlp-bg">
        <div className="trainers-container ">
          <h2 className="training-section-title mobile-hide">
            Who Will Be Providing You with the Digital Marketing Training?
          </h2>
          <h2 className="training-section-title desktop-hide">
            Who Will be Providing the Digital Marketing<span className="mobile-block"> Training?</span>
          </h2>
          <div className="training-section-subtitle">
            You do not learn by just listening to people. You learn by doing,
            and by doing under the guidance of practitioners.{" "}
          </div>
          <br />
          <div className="training-section-subtitle">
            We’ve designed the digital marketing training for this online
            digital marketing course on this foundational insight. And thus, you
            will be trained by experts who have been in senior marketing and
            digital marketing job roles who will help you get <span className="bold-text"> ready to deliver
            on your roles from Day 1.</span>{" "}
          </div>

          <div className="trainers-slider">
            <Slider {...settings}>
              {trainersImages.map((info, key) => (
                <div className={`trainer-card ${info?.addStyles ? "customized" : ""}`} key={key}>
                  <LazyLoad once>
                    <img className={info?.addStyles ? "customized-trainer-img" : ""} src={info.image} alt={info.alt} title={info.alt} />
                  </LazyLoad>
                </div>
              ))}
            </Slider>
            <div className="trainers-note">And a range of external experts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
