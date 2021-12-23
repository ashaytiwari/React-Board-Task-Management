import { ADD_UPDATE_DATA } from "../constants/board";

export const addUpdateBoardData = (data) => async (dispatch) => {
  dispatch({
    type: ADD_UPDATE_DATA,
    payload: data
  });
};
