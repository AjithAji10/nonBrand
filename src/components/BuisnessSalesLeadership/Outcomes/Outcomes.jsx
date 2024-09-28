// import { StaticImage } from 'gatsby-plugin-image';
import React from "react";
import "./styles.scss";
import underline from "../../../images/csm/new-underline.png";
import Graph from "../../../images/basl/outcomeGraph.png";
import DiaryImg from "../../../images/basl/diaryImage.png";
import DiaryImgMob from "../../../images/basl/benifitsMobImg.png";
import DotsBgRight from "../../../images/basl/pgpBgRight.png";
import DotsBgLeft from "../../../images/basl/outComeDotBg.png";
import Notes from "./NoteFomFounders";

const outcomes = () => {
 
  return (
    <div className="marketing-outcomes">
      <div class="index-bg">03</div>
      <div className="outcomes-sub">Outcomes</div>
      <img src={underline} className="outcome-undeline" />
      <img src={DotsBgRight} loading='lazy' className='pc-outcome-dots-right' />
      <img src={DotsBgLeft} loading='lazy' className='pc-outcome-dots-left' />

      <div className="our-promise">Our promise:</div>
      <div className="outcome-desc">
        {" "}
        India’s only PGP with accountability of placements.What does this mean -
      </div>
      <img src={Graph} loading="lazy" className="graph-image" />
      <div className="chanceOfHigh">
        The better you do, the better your chances are of a higher CTC.
        <br />
        But guess what? It's not all up to you.
        <span className="yellow-outcome">
          {" "}
          If your job &lt; 7.5L, we refund 60% fee
        </span>
      </div>
      <img src={DiaryImg} loading="lazy" className="diary-image mobile-hide" />
      <img src={DiaryImgMob} loading="lazy" className="diary-image pc-hide" />
      <Notes />
    </div>
  );
};

export default outcomes;
