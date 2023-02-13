import { signIn } from "next-auth/react";
import Button from "../Button";
import SVGIcon from "../SVGIcon";
import { StyledH1 } from "../StyledHeadlines";
import styled from "styled-components";
import Image from "next/image";
import logo from "@/public/icons/logo.png";

export default function LogIn() {
  console.log(logo);
  return (
    <>
      <StyledLogIn>
        <Image src={logo} width={200} height={200} alt="hallo" />

        <StyledH1>Welcome</StyledH1>
        <p>Please select a provider to log in</p>
        <Button variant="submit" type="button" onClick={signIn}>
          <SVGIcon variant="github" color="var(--white)" width={28} />
          GitHub
        </Button>
      </StyledLogIn>
      <StyledCopywrite>© Click photo app | 2023</StyledCopywrite>
    </>
  );
}

const StyledLogIn = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;

  img {
    width: 17rem;
    height: auto;
    margin: 0 auto;
    margin-bottom: 4rem;
    animation-name: fadeIn01;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.03, 0.38, 0.33, 0.94);
  }

  h1 {
    animation-name: fadeIn02;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.03, 0.38, 0.33, 0.94);
  }

  p {
    text-align: center;
    color: var(--grey);
    margin-top: 0;
    margin-bottom: 4rem;
    animation-name: fadeIn03;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.03, 0.38, 0.33, 0.94);
  }

  button {
    animation-name: fadeIn04;
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.03, 0.38, 0.33, 0.94);
  }
  @keyframes fadeIn01 {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    60% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeIn01 {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    10% {
      opacity: 0;
      transform: scale(0.7);
    }
    70% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeIn02 {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    20% {
      opacity: 0;
      transform: scale(0.7);
    }
    80% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeIn03 {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    30% {
      opacity: 0;
      transform: scale(0.7);
    }
    90% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes fadeIn04 {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    40% {
      opacity: 0;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const StyledCopywrite = styled.p`
  position: absolute;
  text-align: center;
  width: 100%;
  left: 0;
  bottom: 2rem;
  color: var(--grey);
  font-size: 0.8rem;
`;
