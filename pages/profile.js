import LogIn from "@/components/LogIn";
import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";
import TabBar from "@/components/TabBar";
import { atom, useAtom } from "jotai";
import { useSession, signOut } from "next-auth/react";
import useSWR from "swr";

const globalActiveTab = atom("uploads");

export default function ProfilePage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useAtom(globalActiveTab);

  const {
    data: loggedInUser,
    isLoading,
    error,
  } = useSWR(session ? `/api/user` : null);

  if (isLoading) return <p>is loading</p>;
  if (error) return <p>error</p>;

  function handleTabBar(state) {
    setActiveTab(state);
  }

  // reverse the posts so the latest is always on top
  const uploadedPosts = [...loggedInUser.uploadedPosts].reverse();
  const likedPosts = [...loggedInUser.likedPosts].reverse();

  if (session) {
    return (
      <>
        <button onClick={signOut}>logout</button>
        <ProfileDetails user={loggedInUser} />

        <TabBar onTabBar={handleTabBar} activeTab={activeTab} />

        {activeTab === "uploads" ? (
          <ProfilePictureList posts={uploadedPosts} />
        ) : (
          <ProfilePictureList posts={likedPosts} />
        )}
      </>
    );
  }
  return <LogIn />;
}
