import { globalPosts, globalUsers } from "@/store";
import { useAtom } from "jotai";
import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";
import { useState, useEffect } from "react";
import getItem from "@/store/getItem";
import useSWR from "swr";
import CommentList from "@/components/CommentList";

export default function ProfilePage({ loggedInUser, reloadUser }) {
  const [allPosts] = useAtom(globalPosts);
  const [users] = useAtom(globalUsers);
  reloadUser();
  // const { data: user, isLoading, error } = useSWR(`/api/user/${loggedInUser}`);

  // if (isLoading) return <p>is loading</p>;
  // if (error) return <p>error</p>;

  // console.log("user", user);
  console.log("loggedInUser", loggedInUser);

  // got it from https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
  // const [hasMounted, setHasMounted] = useState(false);
  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);
  // if (!hasMounted) {
  //   return null;
  // }

  // const loggedInUser = users.find(
  //   (user) => user.id === getItem("loggedInUser")
  // );

  // const userPosts = allPosts.filter((post) => {
  //   return loggedInUser.uploadedPosts.includes(post.id);
  // });

  // const userLikedPosts = allPosts.filter((post) => {
  //   return loggedInUser.likedPosts.includes(post.id);
  // });

  return (
    <>
      <ProfileDetails user={loggedInUser} />
      <p>uploads</p>
      <ProfilePictureList posts={loggedInUser.uploadedPosts} />
      <p>liked</p>
      <ProfilePictureList posts={loggedInUser.likedPosts} />
      <p>comments</p>
      <CommentList comments={loggedInUser.comments} />
    </>
  );
}
