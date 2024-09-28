import React from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import Tick from "../../../images/csm/greenTick.png";
import PcImg from "../../../images/landingPageImages/dmc-pc.webp";
import MLPForm from "../../../components/Forms/MLPForm";
import { useLocation } from "@reach/router";

const Index = ({ handleBtnClick }) => {
  const location = useLocation();

  return (
    <div className="lp-certification" id="certification">
      <div className="lp-c-sub-head mobile-hide">
        LIVE Digital Marketing Classes - Fully integrated with AI
      </div>
      <div className="l-c-head mobile-hide">
        Digital Marketing Course with Certification & Placements
      </div>
      <img src={underline} className="lp-c-underline mobile-hide" alt="" />
      <div className="l-c-desc">
        Choose any of the below courses depending on your schedules. Both the
        Digital Marketing courses come with high quality placements!
      </div>
      <div className="lp-p-flex">
        <div className="lp-dmc-card">
          <div className="lp-dmc-row">
            <div className="lp-dmc-col">
              <div className="lp-dmc-head">Online Digital Marketing Course</div>
              <div className="lp-dmc-li">
                <img src={Tick} className="green-tick" alt="" />
                <div className="dmc-li-text">
                  <div className="lp-dmc-li-title">
                    Core Skills:
                    <br className="mobile-hide" />
                    <span className="lp-dmc-li-desc">
                      Brand Strategy, Meta, Google, Ecom, SEO, Programmatic and
                      all modules Integrated with AI
                    </span>
                  </div>
                </div>
              </div>
              <div className="lp-dmc-li">
                <img src={Tick} className="green-tick" alt="" />
                <div className="dmc-li-text">
                  <div className="lp-dmc-li-title">
                    More Skills:
                    <br className="mobile-hide" />
                    <span className="lp-dmc-li-desc">
                      Excel, CV, Interview Prep, Problem Solving{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lp-dmc-li">
                <img src={Tick} className="green-tick" alt="" />
                <div className="dmc-li-text">
                  <div className="lp-dmc-li-title">
                    Placements and Certifications
                    <br />
                    <span className="lp-dmc-li-desc">
                      Placements going upto 9L +<br /> INDUSTRYCreds
                      <sup>TM</sup>
                      Certification{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img src={PcImg} className="dmc-pc-img" alt="" />
          </div>
          <div className="lp-dmc-row ptop-2">
            <div className="lp-dmc-col dmc-b-2">
              <div className="dmc-full-btn">Full-time</div>
              <div className="lp-dmc-card-title-2">
                Marketing Launchpad: <br />
                Weekday LIVE Course
              </div>
              <div className="lp-dmc-li-title">
                Preferred by:
                <span className="lp-dmc-li-desc">
                  <br className="mobile-none" />
                  Fresh Graduates, Working <br className="mobile-none" />
                  Professionals, Folks with Gap Years
                </span>
              </div>
            </div>
            <div className="lp-dmc-col dmc-b-l">
              <div className="dmc-full-btn">Part-time</div>
              <div className="lp-dmc-card-title-2">
                Marketing Launchpad: <br />
                Weekend LIVE Course
              </div>
              <div className="lp-dmc-li-title">
                Preferred by:
                <span className="lp-dmc-li-desc">
                  <br className="mobile-none" /> College Students, Interns /
                  Working <br className="mobile-none" />
                  Professionals (who cant quit their jobs)
                </span>
              </div>
            </div>
          </div>
          <button
            className="lp-dmc-download"
            onClick={() => handleBtnClick("Download the Brochure")}
          >
            Download the Brochure
          </button>
        </div>
        <div>
          <div className="lp-c-sub-head pc-hide">
            LIVE Digital Marketing Classes <br className="pc-hide" />{" "}
            <span className="mobile-hide">-</span> Fully integrated with AI
          </div>
          <div className="l-c-head pc-hide">
            Digital Marketing Course with Certification & Placements
          </div>
          <img src={underline} className="lp-c-underline pc-hide" alt="" />
        </div>
        {/* form goes here */}
        <MLPForm
          nonBranding="true"
          search={location.search} pathname={location?.pathname} locState={location?.state}
        ></MLPForm>
      </div>
    </div>
  );
};

export default Index;
