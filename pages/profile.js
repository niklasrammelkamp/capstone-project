import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";
import Button from "@/components/Button";
import { useState } from "react";
import SVGIcon from "@/components/SVGIcon";
import styled, { css } from "styled-components";

export default function ProfilePage({ loggedInUser, reloadUser }) {
  const [activeTab, setActiveTab] = useState("uploads");

  reloadUser();

  return (
    <>
      <ProfileDetails user={loggedInUser} />

      <StyledTabBar tabState={activeTab}>
        <Button
          variant="tabBarButton"
          type="button"
          isActive={activeTab === "uploads"}
          onClick={() => {
            setActiveTab("uploads");
          }}
        >
          <SVGIcon variant="pictures" width={20} color="rgb(255,255,255)" />
          my pictures
        </Button>

        <Button
          variant="tabBarButton"
          type="button"
          isActive={activeTab === "likes"}
          onClick={() => {
            setActiveTab("likes");
          }}
        >
          <SVGIcon variant="like" width={17} color="rgb(250,250,250)" />
          liked pictures
        </Button>
        <div></div>
      </StyledTabBar>

      {activeTab === "uploads" ? (
        <ProfilePictureList posts={loggedInUser.uploadedPosts} />
      ) : (
        <ProfilePictureList posts={loggedInUser.likedPosts} />
      )}
    </>
  );
}

const StyledTabBar = styled.div`
  background-color: var(--white);
  margin-bottom: 20px;
  width: 90%;
  height: 38px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 80px;
  display: flex;
  justify-content: space-around;

  div {
    transition: 0.5s ease;
    background-color: var(--black);
    width: 50%;
    position: absolute;
    height: 38px;
    border-radius: 80px;

    display: flex;

    ${({ tabState }) => {
      if (tabState === "uploads") {
        return css`
          left: 0;
        `;
      }
      if (tabState === "likes") {
        return css`
          left: 50%;
        `;
      }
    }}
  }
`;
