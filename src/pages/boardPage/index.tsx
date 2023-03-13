import styled from "styled-components";
import BoardList from "../../@components/board/BoardList";
import Template from "../../@components/common/Template";
import useBoardList from "../../hooks/useBoardList";

export default function BoardPage() {
  const { state, isEnd, getMoreBoardList } = useBoardList();

  return (
    <Template>
      <Container>
        <BoardList
          board={state.board}
          page={state.page}
          isEnd={isEnd}
          getMoreBoardList={getMoreBoardList}
        />
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
