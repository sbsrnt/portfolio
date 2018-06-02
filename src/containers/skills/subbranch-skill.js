import React from 'react';
import PropTypes from 'prop-types';
import Skill from './skill';

const SubBranchSkill = ({ subBranch }) => {
  const title = subBranch[0];
  const skills = subBranch[1];

  return (
    <li className="subBranch">
      <h5>{title}</h5>
      <ul className="subBranch__skills">{skills.map(skill => <Skill key={skill} skill={skill} />)}</ul>
    </li>
  );
};

SubBranchSkill.propTypes = {
  subBranch: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SubBranchSkill;
