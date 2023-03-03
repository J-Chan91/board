import { BOARD_TYPE } from "../../types/boardTypes";
import { BoardPageReducerType } from "../../types/reducerType";

export type Action =
  | {
      type: "INIT";
      board: BOARD_TYPE[] | [];
    }
  | {
      type: "MORE_LIST";
      page: number;
      board: BOARD_TYPE[] | [];
    };

export const initBoardState: BoardPageReducerType = {
  board: [],
  page: 1,
};

export const boardReducer = (state: BoardPageReducerType, action: Action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        board: action.board,
      };
    case "MORE_LIST":
      return {
        ...state,
        board: action.board,
        page: action.page,
      };

    default:
      return initBoardState;
  }
};
