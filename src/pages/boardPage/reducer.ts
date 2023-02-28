import { BOARD_TYPE } from "../../types/boardTypes";
import { BoardPageReducerType } from "../../types/reducerType";

type Action = {
  type: "INIT";
  board: BOARD_TYPE[] | [];
};

export const initBoardState: BoardPageReducerType = {
  board: [],
};

export const boardReducer = (state: BoardPageReducerType, action: Action) => {
  switch (action.type) {
    case "INIT":
      return {
        board: action.board,
      };

    default:
      return initBoardState;
  }
};
