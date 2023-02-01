import css from "styled-jsx/css";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  transition: 0.5s;
  padding: 0;

  ${({ variant, isActive }) => {
    if (variant === "navButton") {
      return css`
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transform: ${isActive ? "translateY(-5px)" : "0"};
        width: 25%;
        height: 100%;

        &::after {
          position: absolute;
          transform: ${isActive ? "translateY(19px)" : "translateY(25px)"};
          opacity: ${isActive ? "1" : "0"};
          content: "";
          display: inline-block;
          transition: 0.5s;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #86e211;
        }
      `;
    }
    if (variant === "navButtonUpload") {
      return css`
        background-color: var(--black);
        height: 4rem;
        aspect-ratio: 1 / 1;
        border-radius: 999px;
        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
        transform: ${isActive ? "rotate(180deg)" : "none"};
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
      `;
    }
  }}
`;

export default StyledButton;
