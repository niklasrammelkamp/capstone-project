import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import useSWR from "swr";
import { useState } from "react";
import Link from "next/link";

export default function PostDetailsPage({ loggedInUser }) {
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const {
    data: post,
    isLoading,
    error,
    mutate,
  } = useSWR(id ? `/api/posts/${id}` : null);

  if (isLoading || !id) return <p>is loading</p>;
  if (error) return <p>error</p>;

  // ----------- ADD COMMENT
  async function handleAddComment(comment) {
    const currentDate = new Date().toLocaleDateString("us-US", {
      dateStyle: "medium",
    });

    const newComment = {
      content: comment,
      date: currentDate,
      user: loggedInUser._id,
      post: post._id,
    };

    try {
      const response = await fetch(`/api/comments/${id}`, {
        method: "PUT",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error(`Error: ${response.status}`);
        setIsError(true);
      }
    } catch (error) {
      console.error(error.message);
      setIsError(true);
    }
    mutate();
  }

  // ----------- DELETE COMMENT
  function handleDeleteComment(id) {
    fetch(`/api/comments/${id}`, { method: "DELETE" });
    mutate();
  }

  return (
    <>
      <>
        <PostingDetails post={post} />
        {isError ? (
          <>
            <p>error</p>
            <button onClick={() => router.reload()}>Try again</button>
          </>
        ) : (
          <CommentForm onAddComment={handleAddComment} />
        )}
        <CommentList
          comments={post.comments}
          onDeleteComment={handleDeleteComment}
        />
      </>
    </>
  );
}
