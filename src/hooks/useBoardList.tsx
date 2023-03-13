import { useReducer, useState } from "react";
import { getBoardList } from "../api/boardAPI";
import { boardReducer, initBoardState } from "../pages/boardPage/reducer";

export default function useBoardList() {
  const [isEnd, setIsEnd] = useState(false);

  const [state, dispatch] = useReducer(boardReducer, initBoardState);

  const getMoreBoardList = async (page: number) => {
    const result = await getBoardList(page);

    if (result.length < 10) setIsEnd(true);

    dispatch({
      type: "MORE_LIST",
      board: [...state.board, ...result],
      page: state.page + 1,
    });
  };

  return { state, isEnd, getMoreBoardList };
}
