import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";

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
  modules: modules,
  module: {
    _id: "NEW1",
    course: "NEW1",
    title: "New Module",
    subsections: [
      {
        _id: "NEW1",
        title: "New Subsection",
        lessons: [
          {
            _id: "NEW1",
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
    addModule: (state, action) => {
      state.modules = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.modules,
      ];
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

export const { addModule, deleteModule, updateModule, setModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
