import React from 'react';
import PropTypes from 'prop-types';
import upperCase from "lodash/upperCase";
import Icon from "../../components/icon/icon";

const Skill = ({skill}) => {
  return (
    <li className="skill">
      <Icon name={skill} />
      <p>{upperCase(skill)}</p>
    </li>
  )
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired
};

export default Skill;