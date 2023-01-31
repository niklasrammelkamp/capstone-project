import Image from "next/image";
import React from "react";
import { globalPictures } from "@/store";
import { useAtom } from "jotai";

import ProfileDetails from "@/components/ProfileDetails";
import ProfilePictureList from "@/components/ProfilePictureList";

export default function ProfilePage() {
  const [pictures] = useAtom(globalPictures);
  return (
    <>
      <ProfileDetails counter={pictures.length} />
      <ProfilePictureList pictures={pictures} />
    </>
  );
}
