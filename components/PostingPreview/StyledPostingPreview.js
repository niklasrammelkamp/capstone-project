import styled, { css } from "styled-components";

export const StyledPostingPrev = styled.div`
  position: relative;
  width: 100%;
  height: 33rem;
  border-radius: calc(var(--border-radius) * 2);
  color: inherit;

  & > a > img {
    border-radius: calc(var(--border-radius) * 2);
    position: absolute;
    height: 100%;
    object-fit: cover;
    min-width: 100%;
    z-index: 0;
  }
`;

export const StyledPostingPrevHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ variant }) => {
    if (variant === "feed") {
      return css`
        position: absolute;
        padding: 0 30px;
        top: 20px;
        z-index: 10;
        color: var(--white);
      `;
    }
  }}
`;

export const BackgroundGradient = styled.div`
  width: 100%;
  height: 150px;
  opacity: 0.5;
  position: absolute;
  z-index: 5;
  border-radius: calc(var(--border-radius) * 2);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const StyledPostingPrevDetails = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(67, 67, 67, 0.49);
  width: 100%;
  border-radius: calc(var(--border-radius) * 2);
  backdrop-filter: blur(7.5px);
  padding: 1.5rem 30px;
  color: var(--white);
`;

export const StyledCategories = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  font-size: 0.8rem;

  li {
    min-width: fit-content;
    padding: 0.4rem 1.3rem;
    border-radius: 8rem;
    background-color: rgba(255, 255, 255, 0.16);
  }

  ${({ variant }) => {
    if (variant === "white") {
      return css`
        margin-bottom: 4rem;
        li {
          background-color: var(--white);
        }
      `;
    }
  }}
`;
