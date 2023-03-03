import { BOARD_TYPE } from "./boardTypes";

export type BoardPageReducerType = {
  page: number;
  board: BOARD_TYPE[] | [];
};
