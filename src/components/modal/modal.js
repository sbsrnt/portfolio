import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Modal = ({ menuOpen, handleModalItemClick }) => (
  <div className={`modal ${menuOpen ? "open" : undefined}`}>
    <a href="#aboutMe" onClick={handleModalItemClick}>
      About Me
    </a>
    <a href="#skills" onClick={handleModalItemClick}>
      Skills
    </a>
    <a href="#projects" onClick={handleModalItemClick}>
      Projects
    </a>
    <a href="#contact" onClick={handleModalItemClick}>
      Contact
    </a>
  </div>
);

Modal.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  handleModalItemClick: PropTypes.func.isRequired
};

Modal.defaultProps = {
  menuOpen: false
};

export default Modal;
