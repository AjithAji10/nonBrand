import React from "react";
import Slider from "react-slick";
import Card2 from "../../TestimonialCard/Card2/index";
import { placementsData } from "./data";
import "./styles.scss";

function Recruiters() {
  const settings = {
   
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
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
    <React.Fragment>
      <div className="mlp-main-placements recruiters">
        <div className="placements-container">
          <div className="placement-slider">
            <h3 className="header">Hear From our Recruiters </h3>

            <Slider {...settings}>
              {placementsData.map((info, key) => (
                <Card2
                  key={key}
                  image={info.image}
                  name={info.name}
                  company={info.company}
                  description={info.description}
                  extraText={info.extra_text ? info.extra_text : ""}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Recruiters;
