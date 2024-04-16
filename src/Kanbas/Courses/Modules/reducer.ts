import { createSlice } from "@reduxjs/toolkit";

export interface ModulesType {
    _id: string;
    course: string;
    title: string;
    subsections: SubsectionType[];
  }
  
  export interface SubsectionType {
    _id: string;
    title: string;
    lessons: LessonType[];
  }
  
  export interface LessonType {
    _id: string;
    text: string;
    link: string;
  }

const initialState = {
  modules: [] as any[],
  module: {
    moduleId: "NEW1-01",
    course: "NEW1",
    title: "New Module",
    subsections: [
      {
        title: "New Subsection",
        lessons: [
          {
            text: "New Lesson",
            link: "google.com",
          },
        ],
      },
    ],
  },
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },

    addModule: (state, action) => {
      state.modules = [action.payload, ...state.modules];
    },

    deleteModule: (state, action) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action) => {
      state.modules = state.modules.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload;
        } else {
          return module;
        }
      });
    },
    setModule: (state, action) => {
      state.module = action.payload;
    },
  },
});

export const { addModule, deleteModule, updateModule, setModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;
