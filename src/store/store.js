import { createContext, useReducer } from "react";
import { initialState, tasksReducer } from "./tasksReducer";

export const generalContext = createContext();

export const UseGeneralContext = ({ children }) => {
  const [tasksState, dispatchTasks] = useReducer(tasksReducer, initialState);
  return (
    <generalContext.Provider value={{ tasksState, dispatchTasks }}>
      {children}
    </generalContext.Provider>
  );
};
