import React from "react";
import Textarea from "@/components/Textarea";
import Image from "next/image";
import Button from "@/components/Button";

export default function ProfileEditForm({ onSubmit, user }) {
  async function uploadImage(data) {
    // uploading the image file
    const response = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });

    // getting the uplaoded file
    const imageData = await response.json();

    return imageData;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.imageFile.name) {
      const image = await uploadImage(formData);

      const newUser = {
        image: image.secure_url,
        bio: data.bio,
        name: data.name,
      };

      onSubmit(newUser);
    } else {
      const newUser = {
        image: user.image,
        bio: data.bio,
        name: data.name,
      };

      onSubmit(newUser);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <Image
              src={loggedInUser.image}
              width={200}
              height={200}
              alt={`profile picture of ${loggedInUser.name}`}
            /> */}

      <label htmlFor="name">upload image</label>
      <input type="file" id="image" name="imageFile" />

      <label htmlFor="name">Edit name</label>
      <input name="name" id="name" type="text" defaultValue={user.name} />

      <Textarea
        name="bio"
        id="bio"
        label="Edit your bio"
        defaultValue={user.bio}
      />

      <Button type="submit">Edit profile</Button>
    </form>
  );
}
