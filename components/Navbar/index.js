import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import SVGIcon from "../SVGIcon";
// import { globalActiveNav } from "@/store";
// import { useAtom } from "jotai";

export default function Navbar() {
  const router = useRouter();
  const [activeNav, setActiveNav] = useState("");

  console.log(router);

  if (router.pathname === "/") {
    setActiveNav("home");
  }

  if (router.pathname === "/upload") {
    setActiveNav("upload");
  }

  if (router.pathname === "/profile") {
    setActiveNav("home");
  }
  return (
    <StyledNav>
      <div>
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          <SVGIcon variant="home" width="24" color="#23222" isFill={true} />
        </button>
        <button
          onClick={() => {
            router.push("/profile");
          }}
        >
          <SVGIcon variant="profile" width="20" color="#23222" />
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          router.push("/upload");
        }}
      >
        <SVGIcon variant="plus" width="20" color="white" />
      </button>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  background-color: lightcoral;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  padding: 0 15px;

  div {
    background-color: lightgoldenrodyellow;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    border-radius: 10rem;
  }

  /* button {
    border: none;
    background-color: var(--black);
    height: 4rem;
    aspect-ratio: 1/1;
    padding: 0;
    border-radius: 50%;
  } */
`;
