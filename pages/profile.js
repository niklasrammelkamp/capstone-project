import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";

export default function ProfilePage({ loggedInUser, reloadUser }) {
  reloadUser();

  return (
    <>
      <ProfileDetails user={loggedInUser} />
      <p>uploads</p>
      <ProfilePictureList posts={loggedInUser.uploadedPosts} />
      <p>liked</p>
      <ProfilePictureList posts={loggedInUser.likedPosts} />
    </>
  );
}
