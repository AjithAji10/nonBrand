import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import YellowUnderline from "../../../images/mlp/yellow-underline.webp";

import "./styles.scss";
import { useLocation } from "@reach/router";

function Curriculum() {
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState("1");

  return (
    <div className="mlp-main-curriculum" id="curriculum">
      <div className="curriculum-container">
        <div className="header-container">
          <h2 className="curriculum-head mlp-head">
            Our online Digital Marketing course syllabus is designed to get you
            placed in roles of ₹4.5L or more
          </h2>
        </div>
        <img
          className="yellow-underline"
          src={YellowUnderline}
          loading="lazy" 
        />
        <span>
          {/* <StaticImage
            src="https://kfwebassets.s3.ap-south-1.amazonaws.com/common/Group-11278.png"
            alt="title underlines"
            placeholder="none"
            className="underline"
          /> */}
        </span>
        <div className="curriculum-description">
          The average digital marketing talent in this market knows the theory
          about tools, pulling out reports, and has some theory about
          optimizations - all of which is stuff you can learn for free. And in
          case you want to know from where we are happy to help!
        </div>
        <div className="curriculum-description">
          The Marketing Launchpad candidates, on the other hand, excel because,
          through our online digital marketing course syllabus, they are trained
          to do more.
        </div>

        <div className="curriculum-weeks">
          <div className="weeks-head">
            <span>Here’s a summary of the 16 weeks:</span>
          </div>
          <div className="cur-tab-head">
            <h3
              className={
                tabSelected === "1"
                  ? "cur-tab-head-name active-tab"
                  : "cur-tab-head-name"
              }
              onClick={() => setTabSelected("1")}
              aria-hidden="true"
            >
              Digital Media Marketing
            </h3>
            <h3
              className={
                tabSelected === "2"
                  ? "cur-tab-head-name active-tab"
                  : "cur-tab-head-name"
              }
              onClick={() => setTabSelected("2")}
              aria-hidden="true"
            >
              Content & Social Media Marketing
            </h3>
          </div>


          {tabSelected === "1" && (
            <table className="mlp-curriculum-table DMM-table">
              <thead>
                <tr>
                  <th className="text-yellow text-h3" colSpan="1">
                    Week
                  </th>
                  <th className="text-yellow" colSpan="3">
                    <div className="text-h3">Functional skill</div>
                  </th>
                  <th className="text-yellow" colSpan="1">
                    <div className="text-h3">Excel Skills</div>
                  </th>
                  <th className="text-yellow" colSpan="1">
                    <div className="text-h3">Human skill</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-yellow mlp-yellow-bg">0</th>
                  <td colSpan="3">
                    <div className="text-h4">
                      ONBOARDING + TEAM HUDDLES + Marketing Fundamentals
                    </div>
                    <br />
                    Introducing you to your team and onboarding you to how our
                    digital marketing training works over the course of 14
                    weeks. And teach you marketing fundamentals
                  </td>
                  <td>Fundamentals of Excel</td>
                  <td>Orientation to Human Skills</td>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">1-3</th>
                  <td colSpan="3">
                    <div className="text-h4">FACEBOOK ADS</div>
                    <br />
                    Get introduced to Facebook ads & learn Campaign Structure,
                    targeting, optimizing campaigns, and planning media. Apply
                    them all in an integrated brand project.
                  </td>
                  <td>
                    Excel modules focused on Analysis of Facebook Ads campaigns
                  </td>
                  <td>Self awareness + CV Building</td>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">4-8</th>
                  <td colSpan="3">
                    <div className="text-h4">GOOGLE ADS:</div>
                    <br />
                    Learn to structure campaigns, strategize biddings, set up
                    campaigns, budget on platforms, and a lot more.
                  </td>
                  <td>
                    Excel modules focused on Analysis of Google Ads campaigns
                  </td>
                  <td rowSpan="2">
                    Interpersonal skills + Personal storytelling + Interview
                    Prep
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">9-11</th>
                  <td colSpan="3">
                    <div className="text-h4">
                      SEARCH ENGINE OPTIMISATION (SEO)
                    </div>
                    <br />
                    Learn On-Page SEO, Off-Page SEO, plan content growth
                    strategies, and start using SEO tools.
                  </td>
                  <td>Excel modules focused on SEO use cases</td>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">12-14</th>
                  <td colSpan="3" className="v-align-top">
                    <div className="text-h4">E-COMMERCE:</div>
                    <br />
                    Learn how to set up an ecommerce platform, understand D2C
                    and CRO on e-commerce platforms. Learn to set up ads and
                    drive traffic to the PDP page on a platform, and get into
                    the operational tasks
                  </td>
                  <td>
                    Excel modules focused on Analysis of Amazon Ads campaigns &
                    problem-solving
                  </td>
                  <td rowSpan={2}>
                    Behavioral Mock Interviews + Individualized support + Work
                    Product Training
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">15-16</th>
                  <td rowSpan="1" className="v-align-top">
                    <div className="text-h4">
                      INTEGRATED PROJECT PRESENTATION:
                    </div>
                    <br />
                    Analyze campaign performance data & create media plans to
                    solve a Brand Problem.
                    {/* <br />
                    <br />
                    <br />
                    <b>Integrated project</b> */}
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} className="placement-drive" >
                    <div className="text-h4">PLACEMENT DRIVE:</div>
                    <br />
                    You will start sitting for placement opportunities after
                    successfully completing training and passing all
                    assessments/benchmarks. During this period, you might also
                    be attending additional refresher sessions / projects /
                    assessments to get better prepared to ace your interviews
                    and jobs.
                    <br />
                    <br />
                    You either get a full-time role or you get an internship
                    post which you get a full-time role. In either case, an{" "}
                    <b>
                      eligible job offer is ONLY if you have a FULL-TIME job of
                      4.5L or more.
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          )}

          {/* CSM table */}

          {tabSelected === "2" && (
            <table className="mlp-main-curriculum-table">
              <thead>
                <tr>
                  <th className="text-yellow text-h3">Week</th>
                  <th className="text-yellow" colSpan="4">
                    <div className="text-h3">Functional skill</div>
                  </th>
                  <th className="text-yellow">
                    <div className="text-h3">Human skill</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="bg-yellow mlp-yellow-bg">0</th>
                  <td colSpan="4">
                    <div className="text-h4">Onboarding + Team Huddles</div>
                    <br />
                    Introducing you to your team and onboarding you to how our
                    digital marketing training works over the course of 14
                    weeks.
                  </td>
                  <th rowSpan="3">
                    <div className="mobile-hide text-h3">
                      Communication Skills
                    </div>
                    <div className="desktop-hide text-h3">
                      Communic-
                      <br /> ation Skills
                    </div>
                  </th>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">1</th>
                  <td colSpan="4">
                    <div className="text-h4">
                      Fundamentals of Marketing in Business
                    </div>
                    <br />
                    Build your marketing acumen through this introductory
                    module. Learn to convert a business problem into a marketing
                    strategy.
                  </td>
                  {/* <td rowSpan="2">
                    <div className="text-h4">Writing Basics</div>
                  </td> */}
                  {/* <th rowSpan="2">
                    <div className="mobile-hide">Communication Skills</div>
                    <div className="desktop-hide text-h4">
                      Communic-
                      <br /> ation Skills
                    </div>
                  </th> */}
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">2-3</th>
                  <td colSpan="4">
                    <div className="text-h4">
                      LONG-FORM WRITING
                    </div>
                    <br />
                      Learn different approaches to writing long-form blogs. Use AI tools like ChatGPT to research and execute better ideas.
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">4-6</th>
                  <td colSpan="4">
                    <div className="text-h4">
                      Social Media Marketing And Copywriting
                    </div>
                    <br />
                    Learn how to strategize, plan and create content for social
                    media platforms - Instagram, LinkedIn, YouTube.
                  </td>
                  {/* <td>
                    <div className="text-h4">Writing for Blogs</div>
                  </td> */}
                  <td>
                    <div className="text-h3">Leadership Skills</div>
                  </td>
                </tr>

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">7-10</th>
                  <td colSpan="4">
                    <div className="text-h4">SEO for Content</div>
                    <br />
                    Strategize and write your long-form content to rank #1 on
                    search results with SEO and build your portfolio at the same
                    time.
                  </td>
                  {/* <td>
                    <div className="text-h4">Writing for Social Media</div>
                  </td> */}
                  <td rowSpan="1">
                    <div className="text-h3">People Skills</div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-yellow mlp-yellow-bg">11</th>
                  <td colSpan="4">
                    <div className="text-h4">Influencer Marketing</div>
                    <br />
                    Get an overview of how to strategize influencer marketing
                    for a brand and create narratives for influencers.
                  </td>
                  {/* <td>
                    <div className="text-h4">Writing for Website / Ads</div>
                  </td> */}
                  <td>
                    <div className="text-h3">Work Ethics</div>
                  </td>
                </tr>
                <tr>
                  <th className="bg-yellow mlp-yellow-bg">12</th>
                  <td colSpan="4">
                    <div className="text-h4">Email Marketing</div>
                    <br />
                    Learn how to write catchy email subject lines and‌ pitches
                    to get people to read your content.
                  </td>
                  {/* <td>
                    <div className="text-h4">Portfolio Building</div>
                  </td> */}
                  <td>
                    <div className="text-h3">
                      CV and Interview Prep continues throughout
                    </div>
                  </td>
                </tr>

                {/* <tr>
                  <th className="bg-yellow mlp-yellow-bg">12</th>

                  <td colSpan="4" className="text-center">
                    <b>Getting ready for the placements</b>
                  </td>
                </tr> */}

                {/* <tr>
                <td colSpan="5" className="bg-light-yellow text-center">
                  <div className="text-h4">Placements</div>
                </td>
              </tr> */}

                <tr>
                  <th className="bg-yellow mlp-yellow-bg">13-15</th>
                  <td colSpan="5">
                    <div className="text-h4"> Finishing School</div>
                    <br />
                    Depending on the gaps identified in your prep based on your
                    scores, you will be asked to go through additional training
                    for these 2 weeks or more to make sure you are on track to
                    move into placements.
                  </td>
                </tr>

                <tr>
                  <td colSpan={6} className="placement-drive" >
                    <div className="text-h4">PLACEMENT DRIVE:</div>
                    <br />
                    You will start sitting for placement opportunities after
                    successfully completing training and passing all
                    assessments/benchmarks. During this period, you might also
                    be attending additional refresher sessions / projects /
                    assessments to get better prepared to ace your interviews
                    and jobs.
                    <br />
                    <br />
                    You either get a full-time role or you get an internship
                    post which you get a full-time role. In either case, an{" "}
                    <b>
                      eligible job offer is ONLY if you have a FULL-TIME job of
                      4.5L or more.
                    </b>
                  </td>
                </tr>

              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="divider" id="schedule"></div>

      <div className="typical-day">
        <div className="curriculum-containers"  >
          <div className="typical-day-img">
            <h2 className="type-day-title">
              What Will Your Typical Day Look Like?
            </h2>
            <div className="type-day-desc m-width">
              Digital Marketing classes take place between Monday - Saturday.
              You will have a test every week to assess your mastery{" "}
              <span>of the objectives set for the week.</span>
            </div>
            {/* <div className="type-day-desc">
              During internships, classes would happen over the weekends.
            </div> */}
            <div className="type-day-desc">
              Here is what an average day might look like.
            </div>

            <div className="type-day-devider"></div>
            <div className="type-day-schedule">
              <div className="type-day-content">
                <div className="type-day-time">10 AM - 12 PM</div>
                <div className="type-day-routine">
                  Review of lectures for the day
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">12 - 1 PM</div>
                <div className="type-day-routine">
                  Practice of the concepts through exercises
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">1 - 2 PM</div>
                <div className="type-day-routine">Lunch</div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">2 - 4 PM</div>
                <div className="type-day-routine">Project work in groups</div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">4 - 5 PM</div>
                <div className="type-day-routine">
                  Feedback on exercises and doubt resolutions
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">5 - 7 PM</div>
                <div className="type-day-routine">
                  Communication Classes, including role-plays, activities,
                  writing etc.{" "}
                </div>
              </div>
              <div className="type-day-content">
                <div className="type-day-time">7 - 8:30 PM</div>
                <div className="type-day-routine">
                  Additional huddles with experts for clarifying any concept
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="does-not-work">
          <div className="does-not-work__content bg-white">
            <p>If this doesn’t work for you, you can also check out our</p>
            <br />
            <Link
              to={`https://www.kraftshala.com/marketing-launchpad/part-time-digital-marketing-course/${location?.search}`}
            >
              <button className="does-not-work__content__link">
                Part-time Digital Marketing Program
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
