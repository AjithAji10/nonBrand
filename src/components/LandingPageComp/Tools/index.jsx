import React from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import tool1 from "../../../images/mlp-part-time/tool-1.webp";
// import tool2 from "../../../images/mlp-part-time/tool-1.webp";
import tool3 from "../../../images/mlp-part-time/tool-3.webp";
import tool4 from "../../../images/mlp-part-time/tool-4.webp";
import tool5 from "../../../images/mlp-part-time/tool-5.webp";
import tool7 from "../../../images/mlp-part-time/tool-7.webp";
import tool8 from "../../../images/mlp-part-time/tool-8.webp";
import tool9 from "../../../images/mlp-part-time/tool-9.webp";
import tool10 from "../../../images/mlp-part-time/tool-10.webp";
import tool11 from "../../../images/mlp-part-time/tool-11.webp";
import tool13 from "../../../images/mlp-part-time/tool-13.webp";
import tool14 from "../../../images/mlp-part-time/tool-14.webp";
import tool15 from "../../../images/mlp-part-time/tool-15.webp";
import tool16 from "../../../images/mlp-part-time/tool-16.webp";
import tool17 from "../../../images/mlp-part-time/tool-17.webp";
import tool18 from "../../../images/mlp-part-time/tool-18.webp";
import ToolsMob from "../../../images/landingPageImages/toolsMob.webp";

const Index = ({handleBtnClick}) => {
  return (
    <div className="lp-tools">
      <div className="lp-tools-hero">
        <div className="l-tools-head">
          Digital Marketing Tools and AI Tools you will master
        </div>
        <img src={underline} className="lp-tools-underline" alt="" />
        <div className="l-tools-desc">
          Here’s a list of various digital marketing tools that you’ll be
          introduced to in our course.<br className="pc-none" /> You’ll be taught how to use these as
          knowing about these <br className="mobile-none" />
          tools is going to make your life easier as you grow further in your
          career.
        </div>
      </div>
      <div className="tools-used-container mobile-hide">
        <div className="mlp-tool">
          <img
            src={tool1}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool13}
            style={{ scale: "0.8" }}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool3}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool4}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool5}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
        </div>
        <div className="mlp-tool">
          <img
            src={tool7}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool8}
            style={{ scale: "0.75" }}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool9}
            style={{ scale: "1.5" }}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool10}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool11}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
        </div>{" "}
        <div className="mlp-tool">
          <img
            src={tool13}
            alt=""
            style={{ scale: "0.8" }}
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool14}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool15}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool16}
            style={{ scale: "1.25" }}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
          <img
            src={tool17}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool-sm"
          />
          <img
            src={tool18}
            alt=""
            loading="lazy"
            className="mlp-part-time-tool"
          />
        </div>
      </div>
      <img src={ToolsMob} className="lp-tools-mob" loading="lazy" />
      <div className="btn-container-full">
        <button className="lp-dmc-download-mob" onClick={() => handleBtnClick('Download Brochure')}>Get Detailed Brochure</button>
      </div>
    </div>
  );
};

export default Index;
