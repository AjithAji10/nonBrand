import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import './styles.scss';

/*Images*/
import sokrati from "../../../images/home/companies/sokrati_new.webp";
import publicis from "../../../images/home/companies/publicis.webp";
import grpm from "../../../images/home/companies/grpm.webp";
import nyka from "../../../images/home/companies/nyka.webp";
import tataq from "../../../images/home/companies/tata.webp";
import googleLogo from "../../../images/home/companies/google-logo.png";
import MensaLogo from "../../../images/home/companies/mensa.png";

import performics from "../../../images/home/companies/performatic.webp";
import bajajfin from "../../../images/home/companies/bajaj-finserv.png";
import coursera from "../../../images/home/companies/coursera.webp";
import { Link } from "@reach/router";

const HeroSection = (props) => {
  return (
    <div className="mlp-hero-container">
      <div className="page-logo">
        <Link to={`/marketing-launchpad/digital-marketing-course/${props.urlParams}`}> 
          <StaticImage
            src="../../../../static/assets/mlpLogo.png"
            alt="The Marketing Launchpad"
            placeholder="none"
          />
        </Link> 
      </div>

      <div className="hero-main-content">
        <div className="sub-title">
          <div className="one">#1</div>
          <h1 className="desc">
            {" "}
            Placement-linked <br/> Digital Marketing  Course
          </h1>
        </div>
        <div className="item-list-container">
          <div className="list-item">
            94% placement rate & 1800+ students placed       
          </div>
          <div className="list-item">
            Real accountability- If the job <br className="pc-none" /> <b>{"< ₹4.5L"}</b>, we refund <b>60%</b>
          </div>
          <div className="list-item">
            Industry’s largest recruiting <br className="pc-none" /> partner
          </div>
        </div>
      </div>

      <div className="recruiter-container">
        <h4 className="recruiter-header-desk">Recruiters include top brands & agencies</h4>
        <h4 className="recruiter-header-mob">Students placed in:</h4>
        <div className="mlp-recruiters">
          <div className="before-hover">
            <img src={googleLogo} className='company-img' alt='google'/>
            <img src={nyka} className='company-img' alt='nyka'/>
            <img src={publicis} className='company-img' alt='publicis'/>
            <img src={bajajfin} className='company-img' alt='bajajfin'/>
            <img src={tataq}className='company-img' alt='tata cliq'/>
          </div>
          <div className="on-hover">
            <img src={performics} className='company-img' alt='performics'/>
            <img src={grpm} className='company-img' alt='groupm'/>
            <img src={MensaLogo} style={{width: "50px"}} className='company-img mensa' alt='Mensa'/>
            <img src={coursera} className='company-img' alt='coursera'/>
            <img src={sokrati}className='company-img' alt='sokrati'/>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
