import React, { useState } from "react";
import "./Accordion.scss";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mt-2">
      <div className="accordion-header" onClick={handleToggle}>
        {title}
        <i className={`icon ${isOpen ? "icon-minus" : "icon-plus"}`} />
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
