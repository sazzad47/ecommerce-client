import React from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    isOpen && (
      <div
        className={`modal-overlay ${isOpen ? "open" : ""}`}
      >
        <div className={`modal-content ${isOpen ? "open" : ""}`}>
          <div className="modal-header">
            <h2 className="modal-title">{title}</h2>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
