import css from "styled-jsx/css";
import styled from "styled-components";

export const StyledDescription = styled.div`
  width: 100;
  position: relative;
  margin-bottom: 2rem;

  label {
    transition: 0.5s ease;
    position: absolute;
    color: var(--grey);
    left: 1.5rem;
    top: ${({ focus }) =>
      focus === "top" || focus === "leave" ? "0.7rem" : "1.5rem"};
    font-size: ${({ focus }) =>
      focus === "top" || focus === "leave" ? "0.8rem" : "1rem"};
    opacity: ${({ focus }) => (focus === "leave" ? "0" : "1")};
  }

  textarea {
    transition: 0.2s ease;
    font-family: inherit;
    width: 100%;
    border: 0;
    resize: none;
    height: 8rem;
    border-radius: var(--border-radius);
    padding: 2.3rem 1.5rem 1.5rem 1.5rem;
    border: ${({ focus }) =>
      focus === "top" || focus === "leave" ? "2px solid var(--green)" : "none"};
  }

  textarea:focus {
    outline: none;
  }
`;
