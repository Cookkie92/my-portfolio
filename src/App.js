// src/App.js
import React from 'react';
import ProjectCard from './components/ProjectCard';
import './App.css';

const projects = [
  {
    title: 'Semester Project 2',
    description: 'A web application that manages tasks for a team.',
    screenshot: 'path_to_screenshot_image',
    repoLink: 'https://github.com/yourusername/semester-project-2',
    liveLink: 'link_to_live_site'
  },
  {
    title: 'JavaScript Frameworks CA',
    description: 'A comprehensive web application built with React.',
    screenshot: 'path_to_screenshot_image',
    repoLink: 'https://github.com/yourusername/javascript-frameworks-ca',
    liveLink: 'link_to_live_site'
  },
  {
    title: 'Project Exam 2',
    description: 'A detailed project showcasing advanced JavaScript techniques.',
    screenshot: 'path_to_screenshot_image',
    repoLink: 'https://github.com/yourusername/project-exam-2',
    liveLink: 'link_to_live_site'
  }
];

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            screenshot={project.screenshot}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <footer>
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default App;
