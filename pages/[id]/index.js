import { globalPictures } from "@/store";
import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { useAtom } from "jotai";

export default function PostDetailsPage() {
  const [pictures, setPictures] = useAtom(globalPictures);
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
              { id: crypto.randomUUID(), content: comment },
              ...picture.comments,
            ],
          };
        }
        return picture;
      })
    );
  }

  // delete comment
  function handleDeleteComment(id) {
    setPictures(
      pictures.map((picture) => {
        if (selectedPicture.id === picture.id) {
          const filteredComments = picture.comments.filter((comment) => {
            return comment.id !== id;
          });
          return { ...picture, comments: filteredComments };
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
