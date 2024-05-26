// src/App.js
import React from "react";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

const projects = [
  {
    title: "Semester Project 2",
    description:
      "A bidding website made using noroff api, here a user with noroff domain mail can register and login to post bids, and bid on others bids. user starts with 1000 points, but can earn more on their account when bids are complete. ",
    screenshot: require("./assets/images/semester project 2.PNG"),
    repoLink: "https://github.com/Cookkie92/Semester-Project-2",
    liveLink: "https://candid-marshmallow-290178.netlify.app/",
  },
  {
    title: "JavaScript Frameworks CA",
    description:
      "An online shop website where people can view product and add to cart, then checkout with their items, or delete if they dont want it.",
    screenshot: require("./assets/images/jsframeworkca.PNG"),
    repoLink: "https://github.com/Cookkie92/js-frameworks-ca",
    liveLink: "https://incomparable-bavarois-077734.netlify.app/",
  },
  {
    title: "Project Exam 2",
    description:
      "A social media app that users using noroff domain can register user and post text and images.",
    screenshot: require("./assets/images/socialmediaapp.PNG"),
    repoLink: "https://github.com/Cookkie92/project-exam-2-cookkie92",
    liveLink: "https://cookkie92.github.io/project-exam-2-cookkie92/",
  },
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
