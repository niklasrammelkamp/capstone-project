import LogIn from "@/components/LogIn";
import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";
import TabBar from "@/components/TabBar";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import Button from "@/components/Button";
import SVGIcon from "@/components/SVGIcon";

// const globalActiveTab = atom("uploads");

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState("uploads");

  const {
    data: user,
    isLoading,
    error,
  } = useSWR(session && id ? `/api/user/${id}` : null);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  function handleTabBar(state) {
    setActiveTab(state);
  }

  if (session) {
    return (
      <>
        <Button variant="back" onClick={router.back}>
          <SVGIcon variant="left" width={10} color="var(--black)" />
          back
        </Button>
        <ProfileDetails user={user} />

        <TabBar onTabBar={handleTabBar} activeTab={activeTab} />

        {activeTab === "uploads" ? (
          <ProfilePictureList posts={user.uploadedPosts} />
        ) : (
          <ProfilePictureList posts={user.likedPosts} />
        )}
      </>
    );
  }
  return <LogIn />;
}
