import styled from "styled-components";
import Image from "next/image";
import SVGIcon from "../SVGIcon";
import ButtonLike from "@/components/ButtonLike";
import ProfilLink from "../ProfilLink";
import { StyledDate, StyledPostImage } from "./StyledPostingDetails";
import {
  StyledCategories,
  StyledPostingPrevHeader,
} from "../PostingPreview/StyledPostingPreview";
import ProfileImage from "../ProfileDetails/ProfileImage";
import { StyledH2 } from "../StyledHeadlines";

export default function PostingDetails({ post, loggedInUserID, reload }) {
  const hasAllSettingsValues = Object.entries(post.settings).filter(
    ([, value]) => {
      return value;
    }
  );

  return (
    <>
      <StyledPostImage
        src={post.image}
        width={200}
        height={200}
        alt={post.description}
      />
      <StyledDate>{post.date}</StyledDate>
      <StyledPostingPrevHeader>
        <ProfilLink href={`/users/${post.user._id}`}>
          <ProfileImage
            userName={post.user.name}
            image={post.user.image}
            width={30}
          />
          <p>{post.user.name}</p>
        </ProfilLink>

        <ButtonLike
          post={post}
          loggedInUserID={loggedInUserID}
          reload={reload}
        />
      </StyledPostingPrevHeader>

      <p>{post.description}</p>
      <StyledCategories variant="white">
        {post.categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </StyledCategories>

      {hasAllSettingsValues.length > 0 && (
        <>
          <StyledH2>Settings</StyledH2>{" "}
          <StyledSettings>
            {post.settings.film && (
              <>
                <div>
                  <SVGIcon variant="film" width="16" />
                  <p>Film</p>
                </div>
                <p>{post.settings.film}</p>
              </>
            )}

            {post.settings.aperture && (
              <>
                <div>
                  <SVGIcon variant="aperture" width="13" />
                  <p>Aperture</p>
                </div>
                <p>f/{post.settings.aperture}</p>
              </>
            )}

            {post.settings.time && (
              <>
                <div>
                  <SVGIcon variant="time" width="13" />
                  <p>Time</p>
                </div>
                <p>{post.settings.time} s</p>
              </>
            )}

            {post.settings.lens && (
              <>
                <div>
                  <SVGIcon variant="lens" width="13" />
                  <p>Lens</p>
                </div>
                <p>{post.settings.lens} mm</p>
              </>
            )}

            {post.settings.camera && (
              <>
                <div>
                  <SVGIcon variant="camera" width="15" />
                  <p>Camera</p>
                </div>
                <p>{post.settings.camera}</p>
              </>
            )}
          </StyledSettings>
        </>
      )}
    </>
  );
}

const StyledSettings = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  margin-bottom: 4rem;

  *:nth-child(even) {
    text-align: right;
  }
  *:nth-child(odd) {
    color: var(--grey);
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
