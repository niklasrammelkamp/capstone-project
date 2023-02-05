import { globalPosts, globalUsers } from "@/store";
import { useAtom } from "jotai";
import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";
import { useState, useEffect } from "react";
import getItem from "@/store/getItem";

export default function ProfilePage() {
  const [allPosts] = useAtom(globalPosts);
  const [users] = useAtom(globalUsers);

  // got it from https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const loggedInUser = users.find(
    (user) => user.id === getItem("loggedInUser")
  );

  const userPosts = allPosts.filter((post) => {
    return loggedInUser.uploadedPosts.includes(post.id);
  });

  const userLikedPosts = allPosts.filter((post) => {
    return loggedInUser.likedPosts.includes(post.id);
  });

  return (
    <>
      <ProfileDetails user={loggedInUser} />
      <p>uploads</p>
      <ProfilePictureList posts={userPosts} />
      <p>liked</p>
      <ProfilePictureList posts={userLikedPosts} />
    </>
  );
}
