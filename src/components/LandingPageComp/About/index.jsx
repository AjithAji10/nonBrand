import React from 'react';
import './styles.scss';
import underline from "../../../images/csm/new-underline.png";

const Index = () => {
  return (
    <div className='lp-about'>
      <div className="lp-about-title">About Us</div>
      <img src={underline} loading='lazy' className='lp-about-underline' />
      <div className="lp-about-desc">
      Kraftshala is an Edtech with the highest placement rate in India. Founded in 2016, it has very quickly become the largest employment generating institute in the country.  We currently offer courses in Digital Marketing, Content Marketing and Sales and Business Leadership for students and young professionals.
        <br/><br/>
      Students from the top BSchools including all IIMs, ISB, MDI, SPJAIN, FMS and companies like HUL, Nestle, RB, Marico and professionals from ITC, Coursera, Google, Taco Bell and more have found value in our training programs. With 1800+ students placed and a recruiter base of 400+, we have the highest placement rate across any online or offline institute.
      </div>
    </div>
  );
};

export default Index;
