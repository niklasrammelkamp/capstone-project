import styled from "styled-components";
import Navbar from "../Navbar";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  return (
    <>
      {session && <Navbar />}
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  padding: 0 30px 6rem 30px;
  word-wrap: break-word;
`;
