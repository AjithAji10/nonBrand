import React from "react";

const EMITable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>EMI Partner</th>
            <th>Amount <br/>(incl. GST)</th>
            <th>Duration (Months)</th>
            <th style={{minWidth: "100px"}}>Interest / annum</th>
            <th>
            Monthly <br/>Payments
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={4}>Propelld</td>
            <td rowSpan={4}>₹146,320</td>
            <td>15</td>
            <td>11%</td>
            <td>₹11,096</td>
          </tr>

          <tr>
            <td>18</td>
            <td>11%</td>
            <td>₹9,470</td>
          </tr>

          <tr>
            {/* <td></td> */}
            <td>21</td>
            <td>11%</td>
            <td>₹8,309</td>
          </tr>

          <tr>
            {/* <td></td> */}
            <td>24</td>
            <td>11%</td>
            <td>₹7,438</td>
          </tr>
        </tbody>
      </table>
      {/* <p>
        <i>
          All amounts can be facilitated through EMI partners and are exclusive of GST
        </i>
      </p> */}
      <div className="emi-terms-eligibe-main">
        <div>
          <p><b>Terms and Conditions</b></p>
          <ul>
            {/* <li>
            Age to be above 21 years
            </li> */}
            <li>
              The credit facility is provided by a third-party credit facility provider and any arrangement with such a third party is outside Kraftshala’s purview.
            </li>
            <li>
            You can choose to avail EMI options from your credit card providers
            </li>
            <li>
            The tenures of lesser months are also available subject to approval from the NBFC partner.
            </li>
            <li>
            A processing fee will be charged on the basis of the payment method selected.            </li>
          </ul>
        </div>
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
