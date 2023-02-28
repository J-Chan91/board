import { useEffect, useReducer } from "react";
import styled from "styled-components";
import BoardList from "../../@components/board/BoardList";
import Template from "../../@components/common/Template";
import { getBoardList } from "../../api/boardAPI";
import { boardReducer, initBoardState } from "./reducer";

export default function BoardPage() {
  const [state, dispatch] = useReducer(boardReducer, initBoardState);

  const init = async () => {
    const result = await getBoardList();

    dispatch({ type: "INIT", board: result });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <Template>
      <Container>
        <BoardList board={state.board} />
      </Container>
    </Template>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
