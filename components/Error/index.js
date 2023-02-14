import Button from "../Button";
import Image from "next/image";
import SVGIcon from "../SVGIcon";
import styled from "styled-components";
import logo from "@/public/icons/error.png";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();
  return (
    <>
      <StyledError>
        <StyledLogo
          src={logo}
          width={200}
          height={200}
          alt="hallo"
          style={{ "--delay": `0s` }}
        />

        <StyledErrorHeadline>Sorry!</StyledErrorHeadline>
        <StyledErrorText>Something went wrong.</StyledErrorText>
        <Button variant="submit" type="button" onClick={() => router.push("/")}>
          Please try again
        </Button>
      </StyledError>
      <StyledCopywrite>© Click photo app | 2023</StyledCopywrite>
    </>
  );
}

const StyledLogo = styled(Image)`
  width: 10rem;
  height: auto;
  margin: 0 auto;
`;

const StyledErrorHeadline = styled.h1`
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.6rem;
  font-size: 3rem;
  text-align: center;
`;

const StyledErrorText = styled.p`
  color: var(--grey);
  margin-top: 0;
  margin-bottom: 4rem;
`;

const StyledError = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  text-align: center;
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
