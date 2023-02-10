import css from "styled-jsx/css";
import styled from "styled-components";

export const StyledUpload = styled.label`
  background-color: var(--white);
  display: flex;
  width: 100%;
  height: 8rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  color: var(--grey);
  border-radius: var(--border-radius);
  position: relative;
  transition: 0.2s ease;
  margin-bottom: 2rem;

  input {
    /* display: none; */
    opacity: 0;
    position: absolute;
  }

  ${({ isActive }) => {
    return css`
      border: ${isActive ? "2px solid var(--green)" : "none"};
    `;
  }}
`;
