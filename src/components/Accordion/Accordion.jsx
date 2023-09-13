import React, { useState } from "react";
import "./Accordion.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mt-2">
      <div className="accordion-header" onClick={handleToggle}>
        {title}
        {isOpen ? <ExpandLessIcon sx={{fontSize: "2rem"}} /> : <ExpandMoreIcon sx={{fontSize: "2rem"}} />}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
