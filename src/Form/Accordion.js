import React, { useState } from "react";

function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container-fluid  bg-light pt-1 pb-1">
      <div className="row justify-content-center ">
        <div className="bg-info col-12 col-md-10 col-lg-12 ">
          <div
            className="d-flex justify-content-between align-items-center cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <h2>{title}</h2>
            <button className="bg-transparent fs-2 border-0 cursor-pointer">
              {isActive ? "-" : "+"}
            </button>
          </div>
          <div>
            <p className="text-white">{isActive && content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
