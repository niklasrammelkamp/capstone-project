import Button from "../Button";
import SVGIcon from "../SVGIcon";
import useSWR from "swr";
import { useState } from "react";

export default function ButtonLike({ post, loggedInUserID, reload }) {
  const [isLiked, setIsLiked] = useState(false);

  async function like() {
    try {
      const response = await fetch(`/api/posts/${post._id}`, {
        method: "PUT",
        body: JSON.stringify(loggedInUserID),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
    reload();
  }

  async function disLike() {
    try {
      const response = await fetch(`/api/posts/${post._id}`, {
        method: "DELETE",
        body: JSON.stringify(loggedInUserID),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
    reload();
  }

  if (post.likes.includes(loggedInUserID) || isLiked) {
    return (
      <Button
        type="button"
        onClick={() => {
          disLike();
          setIsLiked(false);
        }}
      >
        <SVGIcon variant="like_filled" color="black" width={24} />
      </Button>
    );
  }
  if (!post.likes.includes(loggedInUserID) || !isLiked) {
    return (
      <Button
        type="button"
        onClick={() => {
          like();
          setIsLiked(true);
        }}
      >
        <SVGIcon variant="like" color="black" width={24} />
      </Button>
    );
  }
}
