import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./styles.scss";
import micIcon from "../../../images/mlp/tools/mic-icon.png";
import notepadIcon from "../../../images/mlp/tools/notepad-icon.png";

const MLPMainTools = () => {
  return (
    <div className="mlp-tools">
      <h2 className="mlp-tools-head">
        What Digital Marketing tools will Be Covered?
      </h2>
      <span>
        {/* <StaticImage
          src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11278.png"
          alt="title underlines"
          placeholder="none"
          className="underline"
        /> */}
      </span>
      <div className="mlp-tool-description">
        Here’s a list of various digital marketing tools that you’ll be
        introduced to in our course. You’ll be taught how to use these as
        knowing about these tools is going to make your life easier as you grow
        further in your career.
      </div>

      <div className="tools-container">
        <div className="tools-background">
          <div className="header-container"><img src={micIcon} /> Digital Media Marketing</div>
          <div className="tools-holder mobile-hide" >
            <StaticImage src='../../../images/mlp/tools/dmmPcTop.webp' />
            <StaticImage src='../../../images/mlp/tools/dmmPcMid.webp' />
            <StaticImage src='../../../images/mlp/tools/5icons.webp' />
          </div>
          <div className="tools-holder desktop-hide">
            <StaticImage src='../../../images/mlp/tools/dmm-mobile-tools.webp' />
          </div>
        </div>
      </div>

      <div className="tools-container">
        <div className="tools-background">
          <div className="header-container"><img src={notepadIcon} />Content & Social Media Marketing</div>
          <div className="tools-holder mobile-none">
            <StaticImage src='../../../images/mlp/tools/csm-top.webp' />
            <StaticImage src='../../../images/mlp/tools/csm-btm.webp' className="btm-image"/>
          </div>
          <div className="tools-holder desktop-hide">
            <StaticImage src='../../../images/mlp/tools/csm-mobile-tools.webp' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLPMainTools;
