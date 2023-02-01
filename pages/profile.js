import { globalPosts } from "@/store";
import { useAtom } from "jotai";

import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";

export default function ProfilePage() {
  const [pictures] = useAtom(globalPosts);
  return (
    <>
      <ProfileDetails counter={pictures.length} />
      <ProfilePictureList pictures={pictures} />
    </>
  );
}
