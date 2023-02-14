import css from "styled-jsx/css";
import styled from "styled-components";

export const StyledFilter = styled.section`
  width: calc(100% + 60px);
  margin-left: -30px;
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: scroll;
  padding: 0 30px;

  &::-webkit-scrollbar {
    width: 12px;

    height: 2px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    margin: 0 30px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 200px;
    background: var(--grey);
  }
`;
