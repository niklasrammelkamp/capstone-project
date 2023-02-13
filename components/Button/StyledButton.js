import css from "styled-jsx/css";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  transition: 0.5s;
  /* padding: 0; */
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;

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
        background-color: ${isActive ? "var(--red)" : "var(--background)"};
        color: ${isActive ? "white" : "var(--grey)"};
        width: ${isActive ? "70%" : "100%"};
        height: 4rem;
        border-radius: 2rem;
        gap: 0.5rem;

        svg {
          transition: 0.5s ease;
          transform: ${isActive ? "scale(1.3)" : "scale(1)"};
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

    if (variant === "settings") {
      return css`
        position: absolute;
        top: 30px;
        right: 30px;
        z-index: 20;
      `;
    }

    if (variant === "suggestion") {
      return css`
        padding: 0.5rem 0;
        justify-content: ${isActive ? "" : "flex-start"};
        text-align: left;
        width: ${isActive ? "6rem" : "90%"};
        background-color: ${isActive ? "var(--black)" : ""};
        color: ${isActive ? "var(--white)" : "var(--black)"};
        padding: ${isActive ? "0.5rem 1rem" : "none"};
        height: ${isActive ? "2.5rem" : "none"};
        border-radius: 8rem;
      `;
    }

    if (variant === "submit") {
      return css`
        background-color: var(--black);
        color: var(--white);
        width: 100%;
        border-radius: 8rem;
        height: 4rem;
        gap: 0.7rem;

        div > svg {
          width: 10rem !important;
          height: 10rem !important;
          display: block;
        }
      `;
    }

    if (variant === "filter") {
      return css`
        min-width: fit-content;
        margin-bottom: 0.8rem;
        background-color: ${isActive ? "var(--black)" : "var(--white)"};
        color: ${isActive ? "var(--white)" : "var(--black)"};
        padding: 0.5rem 1.5rem;
        border-radius: 10rem;
      `;
    }
  }}
`;

export default StyledButton;
