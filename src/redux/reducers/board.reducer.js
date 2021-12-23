import { ADD_UPDATE_DATA } from "../constants/board";

const initialState = {
  dataSet: {
    tasks: {
      "task-1": {
        id: "task-1",
        content: "Content for task 1",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      },
      "task-2": {
        id: "task-2",
        content: "Content for task-2",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      },
      "task-3": {
        id: "task-3",
        content: "Content for task-3",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      },
      "task-4": {
        id: "task-4",
        content: "Content for task-4",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      }
    },
    columns: {
      "column-1": { id: "column-1", title: "Todo", taskIds: ["task-1"] },
      "column-2": {
        id: "column-2",
        title: "In progress",
        taskIds: ["task-2", "task-3"]
      },
      "column-3": { id: "column-3", title: "Review", taskIds: [] },
      "column-4": { id: "column-4", title: "Completed", taskIds: ["task-4"] }
    },
    columnOrder: ["column-1", "column-2", "column-3", "column-4"]
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_UPDATE_DATA:
      return {
        ...state,
        dataSet: payload
      };
    default:
      return state;
  }
};
