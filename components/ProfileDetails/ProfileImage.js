import Image from "next/image";
import styled from "styled-components";

export default function ProfileImage({ image, userName, width }) {
  return (
    <StyledProfileImage width={width}>
      <Image
        src={image}
        width={width}
        height={width}
        priority
        alt={`profile picture of ${userName}`}
      />
    </StyledProfileImage>
  );
}

const StyledProfileImage = styled.div`
  position: relative;
  ${({ width }) => {
    return `width: ${width}px; height: ${width}px;`;
  }};

  img {
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: absolute;
    height: 100%;
    object-fit: cover;
    min-width: 100%;
  }
`;
