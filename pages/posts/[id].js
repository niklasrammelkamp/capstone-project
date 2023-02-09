import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import useSWR from "swr";
import { useState } from "react";
import { useSession } from "next-auth/react";
import LogIn from "@/components/LogIn";
import Button from "@/components/Button";
import styled from "styled-components";
import SVGIcon from "@/components/SVGIcon";

export default function PostDetailsPage() {
  const { data: session } = useSession();
  const [isError, setIsError] = useState(false);
  const [reallyDelete, setReallyDelete] = useState(false);
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

  if (postIsLoading || !id) return <p>Post is loading</p>;
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

      if (!response.ok) {
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

  async function handleDeletePost() {
    try {
      const response = await fetch(`/api/posts/${post._id}`, {
        method: "DELETE",
        body: JSON.stringify({ about: "deletePost", userID: loggedInUser._id }),
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
    router.back();
  }

  console.log(reallyDelete);

  if (session) {
    return (
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

        {post.user._id === loggedInUser._id && (
          <>
            <StyledDeleteButtons>
              <Button
                variant="deletePost"
                isActive={reallyDelete}
                onClick={
                  reallyDelete
                    ? handleDeletePost
                    : () => {
                        setReallyDelete(true);
                      }
                }
              >
                <SVGIcon
                  variant="bin"
                  width={15}
                  color={reallyDelete ? "white" : "var(--grey)"}
                />
                {reallyDelete ? "Are you sure?" : "Delete post"}
              </Button>

              <Button
                variant="deleteBack"
                isActive={reallyDelete}
                onClick={() => setReallyDelete(false)}
              >
                {reallyDelete && "no"}
              </Button>
            </StyledDeleteButtons>
          </>
        )}
      </>
    );
  }
  return <LogIn />;
}

const StyledDeleteButtons = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;
