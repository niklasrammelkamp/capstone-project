import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import { StyledH1 } from "../StyledHeadlines";
import { StyledDate } from "../PostingDetails/StyledPostingDetails";

export default function ProfileDetails({ user }) {
  return (
    <StyledProfileDetails>
      <ProfileImage image={user.image} width={200} userName={user.name} />

      <StyledPostingCount>
        <p>{user.uploadedPosts.length}</p>
        <SVGIcon variant="pictures" width="17" />
      </StyledPostingCount>
      <StyledH1>{user.name}</StyledH1>
      <StyledDate variant="profile">since {user.regestrationYear}</StyledDate>
      <p>{user.bio}</p>
    </StyledProfileDetails>
  );
}

const StyledProfileDetails = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPostingCount = styled.div`
  background-color: var(--white);
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.5rem 1.5rem;
  border-radius: 5rem;
  color: var(--grey);
  margin-top: -1rem;
  z-index: 20;

  p {
    margin: 0;
  }
`;
