import React from "react";
import { useState } from "react";
import Accordion from "./Accordion/accordion";
import { faqsData } from "./data";
import "./styles.scss";

function FAQ() {
  const [show, setShow] = useState();
  const [selected,setSelected] = useState('general');
  let filterData = faqsData.filter(el => {
    return selected.includes(el.category);
  });

  if(selected === 'general') {
    filterData = faqsData;
  }
  
  return (
    <div className="mlp-faq-main faq-container">
      <h2 className="mlp-faq-title">Online Digital Marketing Course: FAQs</h2>
      <div className="faq-content">
        <div className="list-container">
          <div className={`list-item  ${selected.includes("general") && "selected"}`} onClick={() => setSelected('general')}>All</div>
          <div className={`list-item  ${selected.includes("training") && "selected"}`} onClick={() => setSelected("training")}>Training</div>
          <div className={`list-item  ${selected.includes("eligibility") && "selected"}`} onClick={() => setSelected("eligibility")}>Eligibility</div>
          <div className={`list-item  ${selected.includes("admission") && "selected"}`} onClick={() => setSelected("admission")} >Screening Process</div>
          <div className={`list-item  ${selected.includes("placement") && "selected"}`} onClick={() => setSelected("placement")}>Placement</div>
          <div className={`list-item  ${selected.includes("fee") && "selected"}`} onClick={() => setSelected("fee")}>Fee</div>
        </div>
        <div className="faqs mlp-faq">
          {filterData.map((info, k) => (
            <Accordion key={k} index={k} show={show} setShow={setShow} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
