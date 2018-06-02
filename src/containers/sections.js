import React from "react";
import ReactTooltip from "react-tooltip";
import Section from "../components/section/section";
import AboutMe from "./about-me/about-me";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Contact from "./contact/contact";

const Sections = () => {
  return (
    <div className="sections">
      <Section title="about me">
        <AboutMe />
      </Section>

      <Section title="skills" list>
        <Skills />
      </Section>

      <Section title="projects" list>
        <Projects />
        <ReactTooltip />
      </Section>

      <Section title="Contact">
        <Contact list />
      </Section>
    </div>
  );
};

export default Sections;
