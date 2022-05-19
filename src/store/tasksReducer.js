import { ADD_TASK } from "./tasksAction";

export const initialState = {
  tasks: [],
};
export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      console.log(state);
      return {
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};
