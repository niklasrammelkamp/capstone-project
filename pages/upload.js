import UploadForm from "@/components/UploadForm";
import { globalPosts, globalUsers } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { initialCategories } from "@/store/categories";
import getItem from "@/store/getItem";
import { useState, useEffect, use } from "react";

// For the search function I got inspierd by: https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ReactwithMasoud

export default function UploadPage() {
  const [posts, setPosts] = useAtom(globalPosts);
  const router = useRouter();
  const [users, setUsers] = useAtom(globalUsers);

  // got it from https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  const loggedInUser = users.find(
    (user) => user.id === getItem("loggedInUser")
  );

  function handleSubmit(post) {
    setPosts([...posts, { ...post, user: loggedInUser.id }]);

    setUsers(
      users.map((user) => {
        if (user.id === loggedInUser.id) {
          return { ...user, uploadedPosts: [...user.uploadedPosts, post.id] };
        }
      })
    );

    router.push("/");
  }
  return (
    <UploadForm initialCategories={initialCategories} onSubmit={handleSubmit} />
  );
}
