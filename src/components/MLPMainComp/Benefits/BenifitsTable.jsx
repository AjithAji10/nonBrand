import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const BenifitsTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Internships</th>
          <th>MBA (T2/T3)</th>
          <th>Other Digital Courses</th>
          <th>
            <StaticImage src="../../../../static/assets/logo.webp" />
          </th>
        </tr>
      </thead>
      {/* #1 */}
      <tbody>
        <tr>
          <td>Cost (excluding GST)</td>
          <td>N/A</td>
          <td>₹8L - 15L</td>
          <td>₹0.7-3L</td>
          <td>₹1.24L if you get a job <br/>of ₹4.5L or more</td> 
        </tr>

        {/* #2 */}

        <tr>
          <td>Cost, if unemployed post completion</td>
          <td>N/A</td>
          <td>₹8L - 15L</td>
          <td>₹0.7-3L</td>
          <td>₹49.6k</td>
        </tr>

        {/* #3 */}

        <tr>
          <td>Time Investment</td>
          <td>3 - 6 months</td>
          <td>12-24 months</td>
          <td>4 - 12 months</td>
          <td>16 weeks (including <br/> 8 weeks internship)</td>
        </tr>

        {/* #4 */}

        <tr>
          <td>Jobs after Completion</td>
          <td>Maybe</td>
          <td>₹3L - 7L</td>
          <td>₹2.5L-4L</td>
          <td>₹4.5- 9L</td>
        </tr>
        
        <tr>
          <td>Placement Reports</td>
          <td>N/A</td>
          <td>No</td>
          <td>No</td>
          <td>Published 100% since first batch</td>
        </tr>

        <tr>
          <td>No. of interviews</td>
          <td>N/A</td>
          <td>Till placement process runs (2-3 months)</td>
          <td>Either have an upper cap on applications or nothing is specified</td>
          <td>We keep going till you get placed at 4.5L or more</td>
        </tr>

        {/* #5 */}

        <tr>
          <td>Past Placement Records Published</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>Not Published / Available</td>
          <td>All Placement Reports published online</td>
        </tr>

        {/* #6 */}

        <tr>
          <td>Kind of jobs</td>
          <td>Same as internship</td>
          <td>No minimum bar for CTC and no job promised</td>
          <td>No jobs promised and even if someone is saying jobs, they include internships or freelancing gigs as ‘outcomes’</td>
          <td>4.5L or more Full-Time jobs top companies else 60% fee refunded</td>
        </tr>

        {/* #7 */}

        <tr>
          <td>Practical Exposure in Marketing</td>
          <td>Medium</td>
          <td>Low</td>
          <td>Low - Medium</td>
          <td>
            High
            <p>
              <i>Industry-focused learning</i>
            </p>
          </td>
        </tr>

        {/* #8 */}
        <tr>
          <td>Behavioural Skills Development</td>
          <td>Low-Medium</td>
          <td>Medium</td>
          <td>Low</td>
          <td>High</td>
        </tr>
        {/* #9 */}
        <tr>
          <td>Career Mentors</td>
          <td>Depends if people have time</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>Take your pick from 200+ experts {':)'}</td>
        </tr>
        {/* #10 */}
        <tr>
          <td>Networking</td>
          <td>Limited</td>
          <td>Your batchmates</td>
          <td>Limited</td>
          <td>A very powerful growth network.</td>
        </tr>
        {/* #11 */}
        <tr>
          <td>Lifelong upgradation</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>N/A</td>
          <td>Free pass to all sessions of<br/> the Kraftshala community.</td>
        </tr>
        {/* #12 */}
        <tr>
          <td>High potential peers</td>
          <td>Maybe</td>
          <td>Maybe</td>
          <td>No<p><i>Allow everyone to join in</i></p></td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BenifitsTable;
