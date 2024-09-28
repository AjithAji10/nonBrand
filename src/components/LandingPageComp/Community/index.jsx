import React from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import Marquee from 'react-fast-marquee';
import cohotImg1 from "../../../images/landingPageImages/Marquee/mq1.webp";
import cohotImg3 from "../../../images/landingPageImages/Marquee/mq3.webp";
import cohotImg4 from "../../../images/landingPageImages/Marquee/mq4.webp";
import cohotImg5 from "../../../images/landingPageImages/Marquee/mq5.webp";
import cohotImg6 from "../../../images/landingPageImages/Marquee/mq6.webp";
import cohotImg7 from "../../../images/landingPageImages/Marquee/mq7.webp";
import cohotImg8 from "../../../images/landingPageImages/Marquee/mq8.webp";


const Index = () => {
  return (
    <div className="lp-community">
      <div className="lp-community-hero">
        <div className="lp-community-sub-head">
            Community of Digital Marketing Professionals
        </div>
        <div className="l-community-head">
            The Kraftshala Community
        </div>
        <img src={underline} className="lp-community-underline" alt="" />
        <div className="l-community-desc">
        Lifelong relationships to ensure you have the professional network that adds value to your career. Or even some incredible friends.
        </div>
      </div>
      <Marquee  gradient={false}
        speed={67}
        pauseOnHover={false}
        className="miner-community"
        loop={0} >
        <img src={cohotImg1} loading='lazy' className='marqueImg'/>
        <img src={cohotImg3} loading='lazy' className='marqueImg'/>
        <img src={cohotImg4} loading='lazy' className='marqueImg'/>
        <img src={cohotImg5} loading='lazy' className='marqueImg'/>
        <img src={cohotImg6} loading='lazy' className='marqueImg'/>
        <img src={cohotImg7} loading='lazy' className='marqueImg'/>
        <img src={cohotImg8} loading='lazy' className='marqueImg'/>
      </Marquee>
    </div>
  );
};

export default Index;
