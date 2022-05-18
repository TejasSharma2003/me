import React, { useState } from "react";
import "./index.css";
import "aos/dist/aos.css";
import projectImg from "../../assets/project-img/Picture2.jpg";
import CreateProject from "./CreateProject";
import projects from "./allProjects";
import SectionHead from "../helpers";
function Projects() {
  return (
    <div id="projects" className="main-section" data-aos="fade-up">
      <div className="container">
        <SectionHead value="Projects" />
        <div className="my-projects">
          {projects.map((project) => {
            return (
              <CreateProject
                img={project.img}
                time={project.time}
                about={project.about}
                category={project.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
