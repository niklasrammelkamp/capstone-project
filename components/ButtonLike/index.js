import { useRouter } from "next/router";
import Button from "../Button";
import SVGIcon from "../SVGIcon";

export default function ButtonLike({ post, loggedInUserID, reload }) {
  console.log("post", post);
  console.log("loggedInUserID", loggedInUserID);

  const router = useRouter();

  async function like() {
    console.log("is in NOT likes");
    try {
      const response = await fetch(`/api/posts/${post._id}`, {
        method: "PUT",
        body: JSON.stringify(loggedInUserID),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
    reload();
  }

  async function disLike() {
    console.log("is in likes");
    try {
      const response = await fetch(`/api/posts/${post._id}`, {
        method: "DELETE",
        body: JSON.stringify(loggedInUserID),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
    reload();
  }

  if (post.likes.includes(loggedInUserID)) {
    return (
      <Button type="button" onClick={disLike}>
        <SVGIcon variant="like_filled" color="black" width={24} />
      </Button>
    );
  }
  if (!post.likes.includes(loggedInUserID)) {
    return (
      <Button type="button" onClick={like}>
        <SVGIcon variant="like" color="black" width={24} />
      </Button>
    );
  }
}
