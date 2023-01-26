import initialPictures from "@/store";
import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import { useState } from "react";
import { uid } from "uid";
import CommentList from "@/components/CommentList";

export default function PostDetailsPage() {
  const [pictures, setPictures] = useState(initialPictures);
  const router = useRouter();
  const { id } = router.query;

  // getting the requested picture
  const selectedPicture = pictures.find((picture) => {
    return picture.id === id;
  });

  // adding comment
  function handleAddComment(comment) {
    setPictures(
      pictures.map((picture) => {
        if (selectedPicture.id === picture.id) {
          return {
            ...picture,
            comments: [
              ...picture.comments,
              { commentId: uid(), commentContent: comment },
            ],
          };
        }
        return picture;
      })
    );
  }

  // delete comment
  function handleDeleteComment(deleteComment) {
    setPictures(
      pictures.map((picture) => {
        if (selectedPicture.id === picture.id) {
          const filteredComments = picture.comments.filter((comment) => {
            return comment.commentId !== deleteComment.commentId;
          });
          picture.comments = filteredComments;
        }
        return picture;
      })
    );
  }

  if (selectedPicture) {
    return (
      <>
        <PostingDetails picture={selectedPicture} />
        <CommentForm onAddComment={handleAddComment} />
        <CommentList
          comments={selectedPicture.comments}
          onDeleteComment={handleDeleteComment}
        />
      </>
    );
  }
}
