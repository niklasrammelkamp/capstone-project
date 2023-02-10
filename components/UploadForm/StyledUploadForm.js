import css from "styled-jsx/css";
import styled from "styled-components";

export const StyledUploadContainer = styled.div`
  position: relative;
`;

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
  border-radius: 1.5rem;
  position: relative;

  input {
    display: none;
  }

  ${({ isActive }) => {
    return css`
      border: ${isActive ? "2px solid var(--green)" : "none"};
    `;
  }}
`;
