import React from "react";
import Slider from "react-slick";
import Card7 from "../../TestimonialCard/Card7/index";
import { placementsData } from "./data2";
import { NonBrandData } from "./data3";
import Alumni from "../Alumni/Alumni";

import "./styles.scss";
import { useState } from "react";

function AlumniCarousal(props) {
  const [cardData, setCardData] = useState(placementsData[0]);

  const settings = {
    prevArrow: "",
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
          dots: false,
        },
      },
    ],
  };

  const data = !props.hide ? placementsData : NonBrandData;

  return (
    <React.Fragment >
      {!props.hide && <Alumni data={cardData} /> }
      <div className="mlp-main-placements mlp-main">
        <div className="placements-container">
          <div className="placement-slider">

            <Slider {...settings}>
              {data.map((info, key) => (
                <Card7
                  key={key}
                  image={info.image}
                  video={info.video}
                  name={info.name}
                  batch={info.batch} 
                  alt={info.alt}
                  company={info.company}
                  description={info.testimonial}
                  profile={info.profile}
                  jobRole={info.jobRole}
                  specialisation={info.specialisation}
                  extraText={info.extra_text ? info.extra_text : ""}
                  fn={setCardData}
                  hide={props.hide}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AlumniCarousal;
