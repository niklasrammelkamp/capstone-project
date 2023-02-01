import styled from "styled-components";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  padding: 0 30px 6rem 30px;
`;
