import React, { useState } from "react";
import "./styles.scss";
import underline from "../../../../static/assets/new_underline.png";
import mlpLogo from "../../../images/csm/mlpLogo.png";
import { tableData } from "./tableData";

const Index = () => {
  const [item, setItem] = useState("roi");

  return (
    <div className="lp-career">
      <div className="lp-career-hero">
        <div className="lp-c-sub-head ">
          Best Digital Marketing Course Selection
        </div>
        <div className="l-c-head">
          Comparison of Online<br className="pc-hide"/> Digital Marketing Courses & Career Trajectories
        </div>
        <img src={underline} className="lp-c-underline" alt="" />
        <div className="l-c-desc">
          From Top Digital Marketing Colleges near you, sharing some advantages of Kraftshala
        </div>
      </div>
      <div className="csm-main-placements" id="Benefits">
        <div className="placements-container">
          <div className="tables-container">
            <div className="cover">
              <div className="menu">
                <div
                  className={`menu-item ${item === "roi" && "active"}`}
                  onClick={() => setItem("roi")}
                >
              ROI
                </div>
                <div
                  className={`menu-item ${item === "jobs" && "active"}`}
                  onClick={() => setItem("jobs")}
                >
              Placements
                </div>
                <div
                  className={`menu-item ${item === "curriculum" && "active"}`}
                  onClick={() => setItem("curriculum")}
                >
              Community
                </div>
              </div>
            </div>
            <div className="table-section">
              <table>
                <thead>
                  <th className="firstHr"></th>
                  <th>
                    <img src={mlpLogo} loading="lazy" />
                  </th>
                  <th>Internships</th>
                  <th>MBA T2/T3</th>
                  <th>
                Other Digital
                    <br />
                Courses
                  </th>
                </thead>
                <tbody>
                  {item === "roi" &&
                tableData?.Roi?.map((tr) => {
                  return (
                    <tr>
                      {tr.map((td, index) => (
                        <td
                          key={index}
                          className="td-csm"
                          dangerouslySetInnerHTML={{ __html: td }}
                        ></td>
                      ))}
                    </tr>
                  );
                })}
                  {item === "jobs" &&
                tableData?.Jobs?.map((tr) => {
                  return (
                    <tr>
                      {tr.map((tdContent, index) => (
                        <td
                          key={index}
                          dangerouslySetInnerHTML={{ __html: tdContent }}
                        />
                      ))}
                    </tr>
                  );
                })}
                  {item === "curriculum" &&
                tableData?.curriculum?.map((tr) => {
                  return (
                    <tr>
                      {tr.map((tdContent, index) => (
                        <td
                          key={index}
                          dangerouslySetInnerHTML={{ __html: tdContent }}
                        />
                      ))}
                    </tr>
                  );
                })}
                  {/* {item === 'network' && tableData?.network?.map((tr) => {
                    return (
                      <tr>
                        {tr.map((tdContent, index) => (
                          <td key={index} dangerouslySetInnerHTML={{ __html: tdContent }} />
                        ))}
                      </tr>
                    );
                  })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
