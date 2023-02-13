import css from "styled-jsx/css";
import styled from "styled-components";

export const StyledSettings = styled.section`
  max-height: ${({ show }) => (show ? "0px" : "100rem")};
  overflow: hidden;
  transition: 1s;
`;

export const StyledSettingsHeadline = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  button {
    background-color: var(--white);
    color: var(--black);
  }
`;

export const StyledSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;

  div {
    width: 100%;
  }
`;
