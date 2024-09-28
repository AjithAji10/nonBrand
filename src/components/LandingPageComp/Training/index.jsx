import React from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import Slider from "react-slick";
import { newsData } from "./data";
import PlayIcon from "../../../images/landingPageImages/redPlayIcon.webp";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, sm: 300, md: 800 },
  border: 'none',
  background: 'none',
  p: 0,
};

const Index = ({ handleBtnClick }) => {
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

  const [open, setOpen] = React.useState(false);
  const [currentVideo, setCurrentVideo] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (link) => {
    setCurrentVideo(link);
    handleOpen();
  };

  return (
    <div className="lp-training">
      <div className="lp-trainer-hero">
        <div className="lp-t-sub-head">Largest Marketing Community</div>
        <div className="l-t-head">
          Digital Marketing
          <br className="pc-none" /> Training Reviews
        </div>
        <img src={underline} className="lp-t-underline" alt="" />
        <div className="l-t-desc">
          Kraftshala is the largest hiring partner for all of India’s top
          agencies and 1000 Cr Brands. Check out the amazing list of alumni on
          Linkedin yourself!
        </div>
      </div>
      <div className="mlp-main-placements mlp-main basl-main-placements mobile-none">
        <div className="placements-container basl-placement-container">
          <div className="placement-slider lp-trainers">
            <Slider {...settings}>
              {newsData?.map((news, key) => (
                <div
                  className="lp-trainer-card"
                  onClick={() => handleClick(news.link)}
                >
                  <div
                    className="lp-card-header"
                    style={{ backgroundColor: `${news.color}` }}
                  >
                    <img src={PlayIcon} className="red-playicon" />
                    <img
                      className="news-card-basl-img"
                      src={news.image}
                      loading="lazy"
                    />
                  </div>
                  <div className="news-card-basl-footer">
                    <div className="news-basl-footer-text">
                      {news.name}{" "}
                      <img
                        src={news.compImage}
                        style={{
                          width: news.width ? news.width : "auto",
                          marginTop: news.mtop && `${news.mtop}em`,
                        }}
                        className="training-comp-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="lp-mobile-cards-container">
        <div className="lp-trainers">
          {newsData?.map((news, key) => (
            <div
              className="lp-trainer-card"
              onClick={() => handleClick(news.link)}
            >
              <div
                className="lp-card-header"
                style={{ backgroundColor: `${news.color}` }}
              >
                <img
                  className="news-card-basl-img"
                  src={news.image}
                  loading="lazy"
                />
                <img src={PlayIcon} className="red-playicon" />
              </div>
              <div className="news-card-basl-footer">
                <div className="news-basl-footer-text">
                  {news.name}{" "}
                  <img
                    src={news.compImage}
                    style={{
                      width: news.width ? news.Mobwidth : "auto",
                      marginTop: news.mtop && `${news.mtop}em`,
                    }}
                    className="training-comp-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lp-btn-container">
        <button
          className="popupBtn"
          onClick={() => handleBtnClick("See more success stories")}
        >
          See more success stories
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <> <button className="video-modal-close" onClick={handleClose}>X</button>
          <Box sx={style}>
            <video controls width="100%" autoPlay={true}>
              <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </Box></>
      </Modal>
    </div>
  );
};

export default Index;
