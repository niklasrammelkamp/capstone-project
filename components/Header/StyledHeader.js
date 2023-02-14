const { default: styled } = require("styled-components");

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: -1rem;
  margin-bottom: 2rem;

  img {
    width: 2.5rem;
    height: auto;
  }
`;

export default StyledHeader;
