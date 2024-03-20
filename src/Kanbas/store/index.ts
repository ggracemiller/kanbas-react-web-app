import { configureStore } from "@reduxjs/toolkit";
import modulesReducer, { ModulesType } from "../Courses/Modules/reducer";
export interface KanbasState {
  modulesReducer: {
    modules: ModulesType[];
    module: ModulesType;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
  },
});

export default store;
