import React from "react";
import Button from "../Button";
import SVGIcon from "../SVGIcon";
import StyledProfileSettings from "./StyledProfileSettings";

export default function ProfileSettings({ signOut, onEdit }) {
  return (
    <StyledProfileSettings>
      <Button onClick={onEdit} aria-label="edit profile">
        <SVGIcon variant="edit" width={17} />
        Edit Profile
      </Button>
      <Button onClick={signOut} aria-label="sign out button">
        <SVGIcon variant="signOut" width={17} />
        Sign out
      </Button>
    </StyledProfileSettings>
  );
}
