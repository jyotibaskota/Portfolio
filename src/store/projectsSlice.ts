import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  // Add more fields as needed
}

interface ProjectsState {
  projects: Project[];
}

const initialState: ProjectsState = {
  projects: [
    // Add your projects here
  ],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
  },
});

export const { addProject } = projectsSlice.actions;

export default projectsSlice.reducer;
