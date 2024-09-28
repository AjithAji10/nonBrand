import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import './styles.scss';

const Roles = () => {
  return (
    <div className='marketing-roles'>
      <div className="role-head">
            What Digital Marketing Roles will you get placed in?
      </div>
      <StaticImage src='../../../images/mlp/yellow-underline.webp' alt="underline" className="y-underline" />
      <div className="role-bar">
        <div className="DMM-roles">
          <div className="role-title">Digital Media Marketing</div>
          <ul>
            <li className="role">Performance Marketing Analyst </li>
            <li className="role">Digital Marketing Analyst </li>
            <li className="role">Marketing Associate</li>
            <li className="role">Category Management </li>
            <li className="role">Account Manager </li>
            <li className="role">SEO Analyst</li>
          </ul>
        </div>
        <div className="CSM-roles">
          <div className="role-title">Content & Social Media Management</div>
          <ul>
            <li className="role">Social Media Specialist </li>
            <li className="role">Creative Writing & Content Marketing</li>
            <li className="role">Influencer Marketing Specialist</li>
            <li className="role">Brand Associate</li>
            <li className="role">ORM Specialist </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roles;