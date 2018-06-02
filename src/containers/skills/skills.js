import React from "react";
import data from "../../data";
import Skill from "./skill";
import SubBranchSkill from "./subbranch-skill";
import "./styles/styles.css";
import "./styles/mobile-styles.css";

const Skills = () => {
  const mapBranch = branchItems =>
    branchItems.map(skill => <Skill key={skill} skill={skill} />);

  const mapSubBranch = subBranchSkills =>
    subBranchSkills.map(subBranch => (
      <SubBranchSkill key={subBranch[0]} subBranch={subBranch} />
    ));

  const mapBranches = () =>
    Object.entries(data.skills).map(branch => {
      const branchTitle = branch[0];
      const branchItems = branch[1];

      return (
        <li
          key={branchTitle}
          className={`skills__skill skills__skill--${branchTitle}`}
        >
          <h4>{branchTitle}</h4>
          <ul className="branches">
            {Array.isArray(branchItems)
              ? mapBranch(branchItems)
              : mapSubBranch(Object.entries(branchItems))}
          </ul>
        </li>
      );
    });

  return mapBranches();
};

export default Skills;
