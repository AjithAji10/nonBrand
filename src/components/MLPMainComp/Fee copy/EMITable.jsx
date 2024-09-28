import React from "react";

const EMITable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>EMI Partner</th>
            <th>Tenure (Monthly)</th>
            <th style={{minWidth: "100px"}}>Interest (Flat) per annum</th>
            <th>
              EMI (Monthly)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={4}>Propelld</td>
            <td>15</td>
            <td>11%</td>
            <td>₹10,022</td>
          </tr>

          <tr>
            <td>18</td>
            <td>11%</td>
            <td>₹8,554</td>
          </tr>

          <tr>
            {/* <td></td> */}
            <td>21</td>
            <td>11%</td>
            <td>₹7,505</td>
          </tr>

          <tr>
            {/* <td></td> */}
            <td>24</td>
            <td>11%</td>
            <td>₹6,718</td>
          </tr>

          {/* Neev */}

          <tr>
            <td rowSpan={4}>Neev</td>
            <td>12</td>
            <td>9.40%</td>
            <td>₹12,049</td>
          </tr>

          <tr>
            <td>15</td>
            <td>11.65%</td>
            <td>₹9,837</td>
          </tr>

          <tr>
            <td>18</td>
            <td>13.95%</td>
            <td>₹8,366</td>
          </tr>

          <tr>
            <td>24</td>
            <td>18.55%</td>
            <td>₹6,528</td>
          </tr>
        </tbody>
      </table>
      {/* <p>
        <i>
          All amounts can be facilitated through EMI partners and are exclusive of GST
        </i>
      </p> */}
      <div className="emi-terms-eligibe-main">  
        <h3 className="term-cond-heading">Terms and Conditions</h3>
        <ul>
          {/* <li>
          Age to be above 21 years
          </li> */}
          <li>
            The credit facility is provided by a third-party credit facility provider and any arrangement with such a third party is outside Kraftshala’s purview.
          </li>
          <li>
            The tenures of 3 to 15 months are also available subject to approval from the Non-banking financial partner.
          </li>
          <li>
            A processing fee will be charged on the basis of the payment method selected.
          </li>
        </ul>
        {/* <div>
          <p><b>Eligibility criteria</b></p>
          <ul>
            <li>
              Age between 21-61 years.
            </li>
            <li>
            Min monthly income of 20,000 and above with proof of income such as salary slips/ bank statement of last 3 months/ ITR Receipts.
            </li>
            <li>
            Supporting documents required will be- PAN card, Aadhar card, income proof, functional bank account with UPI/Net banking facility with a steady CIBIL score
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default EMITable;
