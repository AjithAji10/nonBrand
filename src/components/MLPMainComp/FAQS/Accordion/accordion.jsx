import React from "react";

function Accordion({ info,show,setShow,index }) {

  const showFn = () => {
    if(index !== show){
      setShow(index);
    }else {
      setShow('');
    }
  };

  return (
    <div className="custom-accordion">
      <div className="accordion-section">
        <div
          className="accordion-head"
          aria-hidden="true"
          onClick={showFn}
        >
          <h3 className="accordion-title"  dangerouslySetInnerHTML={{ __html: info.title }}></h3>

          <div className={show === index ? "arrow-down" : "arrow-right"}></div>
        </div>

        {show === index && (
          <div
            className="accordion-content"
            dangerouslySetInnerHTML={{ __html: info.description }}
          />
        )}
      </div>
    </div>
  );
}

export default Accordion;
