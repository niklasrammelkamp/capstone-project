import styled from "styled-components";

const StyledProfileSettings = styled.div`
  background-color: var(--white);
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 2rem 4rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: 0.5s ease;
  z-index: 50;
  color: var(--black);

  button {
    gap: 0.5rem;
  }
`;

export default StyledProfileSettings;
