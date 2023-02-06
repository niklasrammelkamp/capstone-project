import UploadForm from "@/components/UploadForm";
import { globalPosts, globalUsers } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { initialCategories } from "@/store/categories";
import getItem from "@/store/getItem";
import { useState, useEffect, use } from "react";

// For the search function I got inspierd by: https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ReactwithMasoud

export default function UploadPage({ loggedInUser }) {
  const [posts, setPosts] = useAtom(globalPosts);
  const router = useRouter();
  const [users, setUsers] = useAtom(globalUsers);

  // // got it from https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
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

  async function handleSubmit(post) {
    const newPost = { ...post, user: loggedInUser._id };
    try {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        router.push("/");
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <UploadForm initialCategories={initialCategories} onSubmit={handleSubmit} />
  );
}

// setPosts([...posts, { ...post, user: loggedInUser.id }]);

//     setUsers(
//       users.map((user) => {
//         if (user.id === loggedInUser.id) {
//           return { ...user, uploadedPosts: [...user.uploadedPosts, post.id] };
//         }
//         return user;
//       })
//     );
