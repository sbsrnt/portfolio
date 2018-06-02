import React from "react";
import PropTypes from "prop-types";
import camelCase from "lodash/camelCase";
import "./styles.css";

const Section = ({ title, children, list = false }) => {
  return (
    <section className={`section__${camelCase(title)}`} id={camelCase(title)}>
      <h3>{title}</h3>
      {list ? <ul className={title}>{children}</ul> : children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  list: PropTypes.bool
};

Section.defaultProps = {
  list: false
};

export default Section;
