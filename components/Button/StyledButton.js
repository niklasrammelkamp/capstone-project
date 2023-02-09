import css from "styled-jsx/css";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  transition: 0.5s;
  padding: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;

  -webkit-tap-highlight-color: transparent;

  ${({ variant, isActive }) => {
    if (variant === "navButton") {
      return css`
        flex-direction: column;
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
        padding: 0;
      `;
    }

    if (variant === "tabBarButton") {
      return css`
        z-index: 10;
        gap: 0.4rem;
        color: var(--white);
        transition: 0, 5s ease;
        mix-blend-mode: difference;
      `;
    }

    if (variant === "deletePost") {
      return css`
        background-color: ${isActive ? "#dd5328" : "var(--background)"};
        color: ${isActive ? "white" : "var(--grey)"};

        width: ${isActive ? "70%" : "100%"};
        /* margin-left: ${isActive ? "-15px" : ""}; */
        height: 4rem;
        border-radius: 2rem;

        gap: 0.5rem;
        svg {
          transition: 0.5s ease;
        }
      `;
    }

    if (variant === "deleteBack") {
      return css`
        background-color: var(--black);
        color: white;
        width: ${isActive ? "30%" : "0"};
        height: ${isActive ? "4rem" : "0"};
        opacity: ${isActive ? "1" : "0"};
        border-radius: 2rem;
      `;
    }
  }}
`;

export default StyledButton;
