import React from "react";
import Textarea from "@/components/Textarea";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "../UploadForm/Input";
import { StyledDescription } from "../UploadForm/StyledDescription";
import { useState } from "react";
import styled from "styled-components";
import { StyledUpload } from "../UploadForm/StyledUpload";
import SVGIcon from "../SVGIcon";
import UploadingSVG from "../AnimatedSVG/UploadingSVG";
import dotsloading from "@/public/icons/dots-loading.json";

export default function ProfileEditForm({ onSubmit, user }) {
  const [descriptionFocus, setDescriptionFocus] = useState(""); // for description field
  const [imageUploadValue, setImageUploadValue] = useState(""); // for upload field
  const [uploading, setUploading] = useState(false);

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
    setUploading(true);

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
    <StyledEditForm onSubmit={handleSubmit}>
      <StyledUpload htmlFor="image" isActive={imageUploadValue}>
        <SVGIcon variant="upload" width={31} />
        {imageUploadValue ? "choose different image" : "upload image"}
        <input
          type="file"
          id="image"
          name="imageFile"
          onChange={
            !uploading
              ? (event) => {
                  const file = event.target.files[0];

                  if (file.size > 7340032) {
                    alert(
                      "File size is too large, please select a file less than 7 MB."
                    );
                    return;
                  }
                  setImageUploadValue(true);
                }
              : undefined
          }
        />
      </StyledUpload>

      <Input name="name" maxLength={30} defaultValue={user.name} />

      <StyledDescription focus={descriptionFocus} noLabel={true}>
        <textarea
          defaultValue={user.bio}
          type="text"
          id="bio"
          name="bio"
          maxLength={250}
          required
          onFocus={(event) => {
            event.target.scrollHeight > 128
              ? setDescriptionFocus("leave")
              : setDescriptionFocus("top");
          }}
          onBlur={(event) => {
            if (event.target.scrollHeight > 128) {
              console.log("hallo");
              setDescriptionFocus("leave");
            } else if (event.target.value) {
              setDescriptionFocus("top");
            } else {
              setDescriptionFocus("");
            }
          }}
          onInput={(event) => {
            if (event.target.scrollHeight > 128) {
              setDescriptionFocus("leave");
            } else {
              setDescriptionFocus("top");
            }
          }}
        />
      </StyledDescription>

      <Button type="submit" variant="submit">
        {uploading ? (
          <>
            <UploadingSVG animationData={dotsloading} />
          </>
        ) : (
          <>Edit Profile</>
        )}
      </Button>
    </StyledEditForm>
  );
}

const StyledEditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
