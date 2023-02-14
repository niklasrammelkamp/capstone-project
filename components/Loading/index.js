import Image from "next/image";
import logo from "@/public/icons/logo_circle.png";
import styled, { keyframes } from "styled-components";

export default function Loading() {
  return (
    <StyledLoading>
      <StyledLoadingImage
        src={logo}
        fit
        alt="logo of click app"
        style={{ "--delay": `0s` }}
      />
      <StyledLoadingImage
        src={logo}
        fit
        alt="logo of click app"
        style={{ "--delay": `1.5s` }}
      />
    </StyledLoading>
  );
}

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(0);
    filter: blur(3px);
} 50%{
      filter: blur(0);
    opacity: 1;
  }
  100%{
    filter: blur(6px);
    opacity: 0;
    transform: scale(1.5) rotate(50deg);
    
  }
`;

const StyledLoading = styled.div`
  margin-top: -3rem;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoadingImage = styled(Image)`
  position: absolute;
  width: 10rem;
  height: auto;
  opacity: 0;
  animation: ${appear} 3s var(--delay) infinite;
`;
