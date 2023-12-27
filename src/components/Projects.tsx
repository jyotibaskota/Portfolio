import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const Projects: React.FC = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <div>
      <h2>Projects Showcase</h2>
      {/* Display a grid or list of projects using Material-UI components */}
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {/* Add image and link to view more details */}
        </div>
      ))}
    </div>
  );
};

export default Projects;
