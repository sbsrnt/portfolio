import React from "react";
import kebabCase from "lodash/kebabCase";
import data from "../../data";
import Icon from "../../components/icon/icon";
import "./styles/styles.css";
import "./styles/mobile-styles.css";

const Projects = () =>
  data.projects.map(project => {
    const mapProjectStack = project.stack.map(stack => (
      <li className="project__stack--item" key={stack}>
        <Icon name={stack} />
      </li>
    ));

    return (
      <li
        className={`project ${kebabCase(project.title)} ${
          !project.live ? "unpublished" : undefined
        }`}
        key={project.title}
      >
        <a
          href={project.url ? project.url : null}
          target={project.url ? "_blank" : null}
          rel="noopener noreferrer"
        >
          <img
            className="project__preview"
            src={project.preview}
            alt={project.preview}
          />
          <div className="project__details">
            <div className="project__title">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" />{" "}
                </a>
              )}
              {project.title}{" "}
              {project.wip && <code data-tip="Work In Progress">wip</code>}
            </div>
            <div className="project__description">{project.description}</div>
            <ul className="project__stack">{mapProjectStack}</ul>
          </div>
        </a>
      </li>
    );
  });

export default Projects;
