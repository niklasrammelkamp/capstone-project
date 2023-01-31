import css from "styled-jsx/css";

const { default: styled } = require("styled-components");

const StyledButton = styled.button`
  border: none;

  ${({ variant, isActive }) => {
    if (variant === "navButton") {
      return css`
        background: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-top: 3px;

        &::after {
          content: "";
          display: inline-block;
          transition: 0.5s;
          width: ${isActive ? "5px" : "0"};
          height: ${isActive ? "5px" : "0"};
          border-radius: 50%;
          background-color: #86e211;
        }
      `;
    }
    if (variant === "navButtonUpload") {
      return css`
        transition: 0.5s;
        background-color: var(--black);
        height: 4rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
        box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
        transform: ${isActive ? "rotate(180deg)" : "none"};
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
  }}
`;

export default StyledButton;
