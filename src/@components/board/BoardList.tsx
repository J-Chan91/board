import styled from "styled-components";
import { BOARD_TYPE } from "../../types/boardTypes";
import BoardItem from "./BoardItem";

type BoardListProps = {
  board: BOARD_TYPE[];
};

export default function BoardList({ board }: BoardListProps) {
  return (
    <Container>
      {board.map((item) => (
        <BoardItem key={item.id} author={item.author} title={item.title} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  width: 720px;
  border: 0.3px solid #fff;
  margin: 20px auto;
`;
