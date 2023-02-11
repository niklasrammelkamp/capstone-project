import css from "styled-jsx/css";
import styled from "styled-components";

export const StyledParagraphWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  margin: ${({ green }) => (green ? "0.7rem 0" : "none")};

  p {
    background-color: var(--white);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    border-radius: 10rem;
    color: ${({ green }) => (green ? "var(--black)" : "var(--grey)")};
    border: ${({ green }) => (green ? "2px solid var(--green)" : "none")};
  }

  button {
    box-shadow: none;
  }
`;
