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
