import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";
import Button from "@/components/Button";
import { useState } from "react";
import SVGIcon from "@/components/SVGIcon";
import styled, { css } from "styled-components";
import TabBar from "@/components/TabBar";

export default function ProfilePage({ loggedInUser, reloadUser }) {
  const [activeTab, setActiveTab] = useState("uploads");

  function handleTabBar(state) {
    setActiveTab(state);
  }

  reloadUser();

  return (
    <>
      <ProfileDetails user={loggedInUser} />

      <TabBar onTabBar={handleTabBar} activeTab={activeTab} />

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
