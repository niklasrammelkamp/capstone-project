import styled from "styled-components";
import Image from "next/image";
import css from "styled-jsx/css";

export const StyledPostImage = styled(Image)`
  width: calc(100% + 60px);
  margin-left: -30px;
  margin-top: -3rem;
  height: auto;
  margin-bottom: 0.8rem;
`;

export const StyledDate = styled.p`
  color: var(--grey);
  font-size: 0.8rem;
  margin: 0;
  font-weight: 300;
  padding-bottom: 0.3rem;

  ${({ variant }) => {
    if (variant === "feed") {
      return css`
        color: var(--white);
        opacity: 0.8;
        margin-bottom: 0.8rem;
        padding-bottom: 0;
      `;
    }
  }}
`;
