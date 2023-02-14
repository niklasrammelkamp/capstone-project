import { signIn } from "next-auth/react";
import Button from "../Button";
import SVGIcon from "../SVGIcon";
import { StyledH1 } from "../StyledHeadlines";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import logo from "@/public/icons/logo.png";

export default function LogIn() {
  return (
    <>
      <StyledLogIn>
        <StyledLogo
          src={logo}
          width={200}
          height={200}
          alt="logo of click app"
          style={{ "--delay": `0s` }}
        />

        <StyledLogInHeadline style={{ "--delay": `0.2s` }}>
          Welcome
        </StyledLogInHeadline>
        <StyledLogInText style={{ "--delay": `0.4s` }}>
          Please select a provider to log in
        </StyledLogInText>
        <Button
          variant="submit"
          type="button"
          onClick={signIn}
          style={{ "--delay": `0.5s` }}
        >
          <SVGIcon variant="github" color="var(--white)" width={28} />
          Login with GitHub
        </Button>
      </StyledLogIn>
      <StyledCopywrite>© Click photo app | 2023</StyledCopywrite>
    </>
  );
}

const appear = keyframes`
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledLogo = styled(Image)`
  width: 17rem;
  height: auto;
  margin: 0 auto;
  margin-bottom: 4rem;
  opacity: 0;
  animation: ${appear} 1s var(--delay) forwards;
  transform: scale(0.8);
`;

const StyledLogInHeadline = styled.h1`
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.6rem;
  font-size: 1.5rem;
  text-align: center;
  opacity: 0;
  animation: ${appear} 1s var(--delay) forwards;
  transform: scale(0.8);
`;

const StyledLogInText = styled.p`
  color: var(--grey);
  margin-top: 0;
  margin-bottom: 4rem;
  opacity: 0;
  animation: ${appear} 1s var(--delay) forwards;
  transform: scale(0.8);
`;

const StyledLogIn = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  text-align: center;

  button {
    opacity: 0;
    animation: ${appear} 1s var(--delay) forwards;
    transform: scale(0.8);
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
