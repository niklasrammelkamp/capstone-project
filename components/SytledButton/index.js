import css from "styled-jsx/css";

const { default: styled } = require("styled-components");

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
        gap: 0.5rem;
        margin-top: ${isActive ? "-5px" : "0"};

        &::after {
          position: absolute;
          bottom: ${isActive ? "0.7rem" : "0"};
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

        /* padding-top: 0;
        padding-left: 0;
        padding-bottom: 0;
        padding-right: 0; */
        padding: 0;
      `;
    }
  }}
`;

export default StyledButton;
