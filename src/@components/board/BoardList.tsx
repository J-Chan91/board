import { useEffect, useRef } from "react";
import styled from "styled-components";
import { BOARD_TYPE } from "../../types/boardTypes";
import BoardItem from "./BoardItem";

type BoardListProps = {
  board: BOARD_TYPE[];
  page: number;
  isEnd: boolean;
  getMoreBoardList: (page: number) => Promise<void>;
};

export default function BoardList({
  board,
  page,
  isEnd,
  getMoreBoardList,
}: BoardListProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  const onIntersection = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      getMoreBoardList(page + 1);
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
  }, [page]);

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
