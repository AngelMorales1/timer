export const ADD_TASK = "ADD_TASK";

export function addTasks(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}
