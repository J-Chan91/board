import styled from "styled-components";
import { Reset } from "styled-reset";

type TempalteProps = {
  children: JSX.Element;
};

export default function Template({ children }: TempalteProps) {
  return (
    <Container>
      <Reset />

      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #101820;
  color: #f2aa4c;
`;
