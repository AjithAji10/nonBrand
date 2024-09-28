import React from "react";
import Slider from "react-slick";
import { trainersImages } from "./data";
import Card5 from "../../TestimonialCard/Card5/index";
import "./styles.scss";
import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";

function CourseTracks() {

  const location = useLocation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          //variableWidth: false,
          //centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="mlp-course-main-trainers">
      <div className="will-be-training">
        <div className="trainers-container">
          <h2 className="training-section-title">Check out the details for the other courses</h2>
          <span className="about-us-story-underline-img">
            <StaticImage
              src="../../../images/common/yellow-underline.webp"
              alt="title underlines"
              placeholder="none"
            />
          </span>

          <div className="trainers-slider">
         
            <Slider {...settings}>
              {trainersImages.map((info, key) => (
                <Card5
                  key={key}
                  name={info.name}
                  description={info.description}
                  link={info.link + location?.search}
                />
              ))}
            </Slider>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseTracks;
