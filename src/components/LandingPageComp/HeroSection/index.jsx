import React from 'react';
import "./styles.scss";
import HeroImg from "../../../images/landingPageImages/heroImg1.webp";
import Mlp from "../../../images/landingPageImages/mlplogo.webp";
import clockIcon from "../../../images/landingPageImages/clockicon.webp";
import caseIcon from "../../../images/landingPageImages/caseicon.webp";
import PeopleIcon from "../../../images/landingPageImages/pplicon.webp";
import RealIcon from "../../../images/landingPageImages/realIcon.webp";
import DotsMiddle from "../../../images/landingPageImages/centerDots.png";
import DotsRight from "../../../images/landingPageImages/rightDots.png";

const Index = () => {
  const handleBtnClick = () => {
    const element = document.getElementById("certification");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className='lp-hero-sect'>
      <img src={DotsMiddle} alt="" className="dots-middle-lp" />
      <img src={DotsRight} alt="" className="dots-right-lp" />
      <div className="lp-hero-text-sec">
        <img src={Mlp} alt="" className="lp-mlp-logo" />
        <div className="lp-hero-head">Best Digital Marketing Course in India 
        with Placements</div>
        <div className="lp-hero-desc">Learn basic to advanced digital marketing skills and get a high-potential job at top brands.<br/><br className='pc-none'/>
        Choose from full-time or part-time courses &  graduate with a job and not just a certificate!  </div>
        <div className="lp-heo-flex">
          <span>
            <img src={clockIcon} alt="" className="icon-lp" />
            650 hours of training
          </span>
          <span className="lp-bar">|</span>
          <span>
            <img src={caseIcon} alt="" className="icon-lp caseIcon" />
            94% Placement Rate 
          </span>
          <span className="lp-bar">|</span>
          <span>
            <img src={PeopleIcon} alt="" className="icon-lp icon-bg" />
            1800+ students placed
          </span>
        </div>
        <div className="lp-heo-flex">
          <span>
            <img src={RealIcon} alt="" className="icon-lp icon-sm" />
            Real Accountability of outcomes<br className='pc-none'/><br className='pc-none'/><span className='flex-normal-txt'> <span className="mobile-none">-</span> If the job pays &lt; ₹4.5L, we refund <b>60%</b> of the fees</span>
          </span>
        </div>
        <button className="lp-learn" onClick={handleBtnClick} >Learn More</button>
      </div>
      <img src={HeroImg} loading='lazy' className='lp-hero-img' />
    </div>
  );
};

export default Index;
