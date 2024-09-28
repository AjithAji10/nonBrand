import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export default function OverviewTitle() {
  return (
    <div className="about-mlp overviewTitle-container" id='overview'>
      <div className="overview-title">
        <p>
        Everything that we do at Kraftshala is designed to get you a marketing job of ₹4.5L or more. More than 1800+ folks have gotten placed at a <span className='gray-text'>CTC of 4.5-9LPA</span>
        </p>
        <StaticImage src='../../../images/mlp/yellow-underline.webp' alt='underline' className='y-underline-mlp'/>
      </div>
   
      
    </div>
  );
}
