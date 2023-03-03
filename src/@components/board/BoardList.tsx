import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getBoardList } from "../../api/boardAPI";
import { Action } from "../../pages/boardPage/reducer";
import { BOARD_TYPE } from "../../types/boardTypes";
import { BoardPageReducerType } from "../../types/reducerType";
import BoardItem from "./BoardItem";

type BoardListProps = {
  board: BOARD_TYPE[];
  state: BoardPageReducerType;
  dispatch: React.Dispatch<Action>;
};

export default function BoardList({ board, state, dispatch }: BoardListProps) {
  const observerRef = useRef<HTMLDivElement>(null);
  const [isEnd, setIsEnd] = useState(false);

  const onIntersection = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      const result = await getBoardList(state.page);

      if (result.length < 10) setIsEnd(true);

      dispatch({
        type: "MORE_LIST",
        board: [...state.board, ...result],
        page: state.page + 1,
      });
    }
  };

  useEffect(() => {
    if (!observerRef.current) {
      return;
    }

    let observer: IntersectionObserver | undefined;

    if (!isEnd) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 0.5,
      });
      observer.observe(observerRef.current);
    }

    return () => observer?.disconnect();
  }, [state.page]);

  return (
    <Container>
      {board.map((item) => (
        <BoardItem key={item.id} author={item.author} title={item.title} />
      ))}

      <div ref={observerRef}></div>
    </Container>
  );
}

const Container = styled.ul`
  width: 720px;
  height: 640px;
  overflow: auto;
  border: 0.3px solid #fff;
  margin: 20px auto;
`;
