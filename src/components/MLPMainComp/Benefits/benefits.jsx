import React from "react";
import "./styles.scss";
import BenifitsTable from "./BenifitsTable";

function Benefits() {
  return (
    <div className="mlp-main-benefits">
      <div className="benefits-container">
        <h2 className="benefit-title-mlp">
          Comparison of Online Digital Marketing Courses & Career Trajectories
        </h2>
        <p className="mlp-desc">
          We know this is a crucial step for you and here is a simple chart to
          make the decision easy.
        </p>
        <BenifitsTable />

      </div>
    </div>
  );
}

export default Benefits;
