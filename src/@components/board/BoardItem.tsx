import styled from "styled-components";

type BoardItemProps = {
  title: string;
  author: string;
};

export default function BoardItem({ title, author }: BoardItemProps) {
  return (
    <Container>
      <TitleEle>{title}</TitleEle>

      <AuthorEle>{author}</AuthorEle>
    </Container>
  );
}

const Container = styled.li`
  padding: 10px 10px;
  margin: 5px 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s;

  &:not(:last-of-type) {
    border-bottom: 1px solid coral;
  }

  &:hover {
    transition: 0.3s;
    font-size: 17px;
  }
`;

const TitleEle = styled.div``;

const AuthorEle = styled.div``;
