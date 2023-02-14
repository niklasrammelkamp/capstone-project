import Image from "next/image";
import styled from "styled-components";

export default function ProfileImage({ image, userName, width }) {
  return (
    <StyledProfileImage width={width}>
      <Image
        src={image}
        width={30}
        height={30}
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
    position: absolute;
    height: 100%;
    object-fit: cover;
    min-width: 100%;
  }
`;
