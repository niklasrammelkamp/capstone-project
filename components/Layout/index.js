import styled from "styled-components";
import Navbar from "../Navbar";
import { useSession } from "next-auth/react";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Layout({ children }) {
  const { data: session } = useSession();

  return (
    <>
      {session && <Navbar />}
      <StyledMain className={poppins.className}>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  padding: 0 30px 6rem 30px;
  word-wrap: break-word;
`;
