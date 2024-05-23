// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, screenshot, repoLink, liveLink }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={screenshot} alt={`${title} Screenshot`} />
      <p><a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a></p>
      {liveLink && <p><a href={liveLink} target="_blank" rel="noopener noreferrer">Live Site</a></p>}
    </div>
  );
};

export default ProjectCard;
