import { globalPosts, globalComments, globalUsers } from "@/store";
import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import { useAtom } from "jotai";
import getItem from "@/store/getItem";
import { useState, useEffect } from "react";
import useSWR from "swr";

export default function PostDetailsPage({ loggedInUser }) {
  const [posts, setPosts] = useAtom(globalPosts);
  const [allComments, setAllComments] = useAtom(globalComments);
  const router = useRouter();
  const { id } = router.query;
  const [users, setUsers] = useAtom(globalUsers);
  const {
    data: post,
    isLoading,
    error,
  } = useSWR(id ? `/api/posts/${id}` : null);

  if (isLoading || !id) return <p>is loading</p>;
  if (error) return <p>error</p>;

  // console.log("data", post);
  // console.log("loggedInUser", loggedInUser);

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

  // if (selectedPost) {
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
  //}
}

// const newId = crypto.randomUUID();

// setAllComments([
//   ...allComments,
//   {
//     id: newId,
//     post: selectedPost.id,
//     user: loggedInUser.id,
//     content: comment,
//     date: currentDate,
//   },
// ]);

// setPosts(
//   posts.map((post) => {
//     if (post.id === selectedPost.id) {
//       return { ...post, comments: [...post.comments, newId] };
//     }
//     return post;
//   })
// );

// setUsers(
//   users.map((user) => {
//     if (user.id === loggedInUser.id) {
//       return { ...user, comments: [...user.comments, newId] };
//     }
//     return user;
//   })
// );

// setAllComments(allComments.filter((comment) => comment.id !== id));
//     setPosts(
//       posts.map((post) => {
//         if (selectedPost.id === post.id) {
//           const filteredComments = post.comments.filter((comment) => {
//             return comment !== id;
//           });
//           return { ...post, comments: filteredComments };
//         }
//         return post;
//       })
//     );

//     setUsers(
//       users.map((user) => {
//         if (loggedInUser.id === user.id) {
//           const filteredComments = user.comments.filter((comment) => {
//             return comment !== id;
//           });
//           return { ...user, comments: filteredComments };
//         }
//         return user;
//       })
//     );
