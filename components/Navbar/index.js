import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SVGIcon from "../SVGIcon";
import StyledButton from "../SytledButton";
// import { globalActiveNav } from "@/store";
// import { useAtom } from "jotai";

export default function Navbar() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    if (router.pathname === "/") {
      setActiveNav("home");
    }

    if (router.pathname === "/upload") {
      setActiveNav("upload");
    }

    if (router.pathname === "/profile") {
      setActiveNav("profile");
    }
  }, [router]);

  return (
    <StyledNav>
      <div>
        <StyledButton
          variant="navButton"
          isActive={activeNav === "home"}
          onClick={() => {
            router.push("/");
          }}
        >
          {activeNav === "home" ? (
            <SVGIcon variant="home_filled" width="24" color="#23222" />
          ) : (
            <SVGIcon variant="home" width="24" color="#23222" />
          )}
        </StyledButton>

        <StyledButton
          variant="navButton"
          isActive={activeNav === "profile"}
          onClick={() => {
            router.push("/profile");
          }}
        >
          <SVGIcon variant="profile" width="20" color="#23222" />
        </StyledButton>
      </div>

      <StyledButton
        variant="navButtonUpload"
        isActive={activeNav === "upload"}
        type="button"
        onClick={() => {
          router.push("/upload");
        }}
      >
        <SVGIcon variant="plus" width="20" color="white" />
      </StyledButton>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  padding: 0 15px;

  div {
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    border-radius: 10rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.15);
  }
`;
