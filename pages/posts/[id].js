import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import useSWR from "swr";

export default function PostDetailsPage({ loggedInUser }) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: post,
    isLoading,
    error,
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
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  // ----------- DELETE COMMENT
  function handleDeleteComment(id) {
    fetch(`/api/comments/${id}`, { method: "DELETE" });
  }

  return (
    <>
      <PostingDetails post={post} />
      <CommentForm onAddComment={handleAddComment} />
      <CommentList
        comments={post.comments}
        onDeleteComment={handleDeleteComment}
      />
    </>
  );
}
