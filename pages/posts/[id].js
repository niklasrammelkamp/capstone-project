import { globalPosts, globalComments, globalUsers } from "@/store";
import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { useAtom } from "jotai";
import getItem from "@/store/getItem";
import { useState, useEffect } from "react";
import useSWR from "swr";

export default function PostDetailsPage() {
  const [posts, setPosts] = useAtom(globalPosts);
  const [allComments, setAllComments] = useAtom(globalComments);
  const router = useRouter();
  const { id } = router.query;
  const [users, setUsers] = useAtom(globalUsers);
  const { data, isLoading, error } = useSWR(id ? `/api/posts/${id}` : null);

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

  if (isLoading) return <p>is loading</p>;
  if (error) return <p>error</p>;

  console.log("data", data);

  // // getting the requested post
  // const selectedPost = posts.find((post) => {
  //   return post.id === id;
  // });

  // // getting the user who posted the selectedPost
  // const userPostedSelectedPost = users.find(
  //   (user) => user.id === selectedPost?.user
  // );

  // // adding userInformation to the selectedPost
  // const selectedPostplusUser = {
  //   ...selectedPost,
  //   userName: userPostedSelectedPost?.name,
  //   userImage: userPostedSelectedPost?.image,
  // };

  // // create array of all comments to selectedPicture and adding the info which user wrote the comment
  // const comments = allComments
  //   .filter((comment) => {
  //     return selectedPost?.comments.includes(comment.id);
  //   })
  //   .map((comment) => {
  //     const user = users.find((user) => comment.user === user.id);
  //     return { ...comment, userName: user.name, userImage: user.image };
  //   });

  // // ----------- ADD COMMENT
  // function handleAddComment(comment) {
  //   const currentDate = new Date().toLocaleDateString("us-US", {
  //     dateStyle: "medium",
  //   });
  //   const newId = crypto.randomUUID();

  //   setAllComments([
  //     ...allComments,
  //     {
  //       id: newId,
  //       post: selectedPost.id,
  //       user: loggedInUser.id,
  //       content: comment,
  //       date: currentDate,
  //     },
  //   ]);

  //   setPosts(
  //     posts.map((post) => {
  //       if (post.id === selectedPost.id) {
  //         return { ...post, comments: [...post.comments, newId] };
  //       }
  //       return post;
  //     })
  //   );

  //   setUsers(
  //     users.map((user) => {
  //       if (user.id === loggedInUser.id) {
  //         return { ...user, comments: [...user.comments, newId] };
  //       }
  //       return user;
  //     })
  //   );
  // }

  // // ----------- DELETE COMMENT
  // function handleDeleteComment(id) {
  //   setAllComments(allComments.filter((comment) => comment.id !== id));
  //   setPosts(
  //     posts.map((post) => {
  //       if (selectedPost.id === post.id) {
  //         const filteredComments = post.comments.filter((comment) => {
  //           return comment !== id;
  //         });
  //         return { ...post, comments: filteredComments };
  //       }
  //       return post;
  //     })
  //   );

  //   setUsers(
  //     users.map((user) => {
  //       if (loggedInUser.id === user.id) {
  //         const filteredComments = user.comments.filter((comment) => {
  //           return comment !== id;
  //         });
  //         return { ...user, comments: filteredComments };
  //       }
  //       return user;
  //     })
  //   );
  // }

  // if (selectedPost) {
  return (
    <>
      <PostingDetails post={data} />
      {/* <CommentForm onAddComment={handleAddComment} />
        <CommentList
          comments={comments}
          onDeleteComment={handleDeleteComment}
        /> */}
    </>
  );
  //}
}
