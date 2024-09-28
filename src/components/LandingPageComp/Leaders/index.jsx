import React from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import Slider from "react-slick";
import { newsData } from "./data";

const Index = ({handleBtnClick}) => {
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
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 805,
        settings: {
          slidesToShow: 1,
          dots: false,
          variableWidth: false,
          centerMode: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="lp-leader">
      <div className="lp-leader-hero">
        <div className="lp-t-sub-head">
          Best Digital Marketing Training from
        </div>
        <div className="l-t-head">Industry’s top Marketing Leaders</div>
        <img src={underline} className="lp-t-underline" alt="" />
        <div className="l-t-desc">
          Get ready to deliver on your jobs from Day 1 under<span className="l-t-desc-b"> 60+ internal and
          external experts </span>who've worked at top brands and taught at IIMs, ISB,
          SP Jain.
        </div>
      </div>
      <div className="mlp-main-placements mlp-main basl-main-placements mobile-none">
        <div className="placements-container basl-placement-container">
          <div className="placement-slider  lp-leader-slider">
            <Slider {...settings}>
              {newsData?.map((news, key) => (
                <div className="lp-leader-card">
                  
                  <img
                    className="news-card-basl-img"
                    src={news.image}
                    loading="lazy"
                  />
                  <div className="news-card-basl-footer">
                    <div className="news-basl-footer-text">
                      <div className="lp-trainer-card-name">{news.name}</div>{" "}
                      <div className="lp-trainer-card-pos">{news.position}</div>{" "}
                      <img
                        src={news.compImage}
                        style={{
                          width: news.width ? news.width : "auto",
                          marginTop: news.mtop && `${news.mtop}em`,
                        }}
                        className={`leader-comp-img ${news.mtop && 'margin-less'}`}
                        loading="lazy"
                      />
                      <div className="lp-trainer-card-desc">{news.company}</div>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="lp-mobile-cards-container">
        <div className="lp-leader-slider">
          {newsData?.map((news, key) => (
            <div className="lp-leader-card">
                  
              <img
                className="news-card-basl-img"
                src={news.image}
                loading="lazy"
              />
              <div className="news-card-basl-footer">
                <div className="news-basl-footer-text">
                  <div className="lp-trainer-card-name">{news.name}</div>{" "}
                  <div className="lp-trainer-card-pos">{news.position}</div>{" "}
                  <img
                    src={news.compImage}
                    style={{
                      width: news.width ? news.width : "auto",
                      marginTop: news.mtop && `${news.mtop}em`,
                    }}
                    className="leader-comp-img"
                    loading="lazy"
                  />
                  <div className="lp-trainer-card-desc">{news.company}</div>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lp-btn-container">
        <button className="popupBtn" onClick={() => handleBtnClick('Get details of more experts')}>Get details of more experts</button>
      </div>
    </div>
  );
};

export default Index;
