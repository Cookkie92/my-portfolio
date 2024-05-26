// src/components/ProjectCard.js
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  screenshot,
  repoLink,
  liveLink,
}) => {
  return (
    <div className="project-card">
      <img
        src={screenshot}
        alt={`${title} Screenshot`}
        className="project-image"
      />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="buttons">
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
