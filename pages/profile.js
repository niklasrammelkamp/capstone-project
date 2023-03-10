import Button from "@/components/Button";
import LogIn from "@/components/LogIn";
import ProfileDetails from "@/components/ProfileDetails";
import ProfileEditForm from "@/components/ProfileEditForm";
import ProfilePictureList from "@/components/ProfilePictureList";
import ProfileSettings from "@/components/ProfileSettings";
import SVGIcon from "@/components/SVGIcon";
import TabBar from "@/components/TabBar";
import { atom, useAtom } from "jotai";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const globalActiveTab = atom("uploads");

export default function ProfilePage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useAtom(globalActiveTab);
  const [showSettings, setShowSettings] = useState(false);
  const [editProfile, setEditProfile] = useState(false);

  const {
    data: loggedInUser,
    isLoading,
    error,
    mutate,
  } = useSWR(session ? `/api/user` : null);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  function handleTabBar(state) {
    setActiveTab(state);
  }

  async function handleEditProfile(newUser) {
    if (
      newUser.name === loggedInUser.name &&
      newUser.bio === loggedInUser.bio &&
      newUser.image === loggedInUser.image
    ) {
      setEditProfile(false);
      return;
    }
    try {
      const response = await fetch(`/api/user`, {
        method: "PUT",
        body: JSON.stringify(newUser),
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
      mutate();
    } catch (error) {
      console.error(error);
    }
    setEditProfile(false);
  }

  if (session) {
    if (loggedInUser) {
      // reverse the posts so the latest is always on top
      const likedPosts = [...loggedInUser.likedPosts].reverse();
      const uploadedPosts = [...loggedInUser.uploadedPosts].reverse();
      return (
        <>
          {editProfile ? (
            <>
              <Button
                type="button"
                aria-label="close edit-form"
                variant="settings"
                onClick={() => setEditProfile(!editProfile)}
              >
                <SVGIcon variant="close" width={14} />
              </Button>
              <ProfileEditForm
                onSubmit={handleEditProfile}
                user={loggedInUser}
              />
            </>
          ) : (
            <>
              <Button
                type="button"
                aria-label="settings"
                variant="settings"
                onClick={() => setShowSettings(!showSettings)}
              >
                <SVGIcon variant="settings" width={16} />
              </Button>

              {showSettings && (
                <ProfileSettings
                  signOut={signOut}
                  onEdit={setEditProfile}
                  showSettings={setShowSettings}
                />
              )}
              <ProfileDetails user={loggedInUser} />
              <TabBar onTabBar={handleTabBar} activeTab={activeTab} />

              {activeTab === "uploads" ? (
                <ProfilePictureList posts={uploadedPosts} />
              ) : (
                <ProfilePictureList posts={likedPosts} />
              )}
            </>
          )}
        </>
      );
    }
  }
  return <LogIn />;
}
