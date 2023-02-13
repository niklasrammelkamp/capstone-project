import css from "styled-jsx/css";
import styled from "styled-components";

export const StyledSuggestions = styled.div`
  background-color: var(--white);
  max-height: 17rem;
  overflow: scroll;
  border-radius: var(--border-radius);
  padding: 0 1.5rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
  }
`;
