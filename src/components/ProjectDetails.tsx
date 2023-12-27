import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";

const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = useSelector((state: RootState) =>
    state.projects.projects.find((p) => p.id.toString() === projectId)
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      {/* Display project details, technologies used, live demo link, and GitHub link */}
    </div>
  );
};

export default ProjectDetails;
