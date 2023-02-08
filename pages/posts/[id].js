import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import useSWR from "swr";
import { useState } from "react";
import { useSession } from "next-auth/react";
import LogIn from "@/components/LogIn";

export default function PostDetailsPage() {
  const { data: session } = useSession();
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const {
    data: post,
    isLoading: postIsLoading,
    error: postError,
    mutate,
  } = useSWR(id ? `/api/posts/${id}` : null);

  const {
    data: loggedInUser,
    isLoading: userIsLoading,
    error: userError,
  } = useSWR(session ? `/api/user` : null);

  if (postIsLoading || !id) return <p>Post are loading</p>;
  if (postError) return <p>error post</p>;

  if (userIsLoading) return <p>User is loading</p>;
  if (userError) return <p>error user</p>;

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
  if (session) {
    return (
      <>
        <>
          <PostingDetails
            post={post}
            reload={mutate}
            loggedInUserID={loggedInUser._id}
          />

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
            loggedInUserID={loggedInUser._id}
            postIsFromUser={post.user._id === loggedInUser._id}
          />
        </>
      </>
    );
  }
  return <LogIn />;
}
