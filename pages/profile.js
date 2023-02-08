import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";
import TabBar from "@/components/TabBar";
import { atom, useAtom } from "jotai";

const globalActiveTab = atom("uploads");

export default function ProfilePage({ loggedInUser, reloadUser }) {
  const [activeTab, setActiveTab] = useAtom(globalActiveTab);

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
