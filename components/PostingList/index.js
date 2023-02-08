import PostingPreview from "../PostingPreview";

export default function PostingList({ posts, loggedInUserID, reload }) {
  return (
    <section>
      {posts.map((post) => {
        return (
          <PostingPreview
            post={post}
            key={post._id}
            loggedInUserID={loggedInUserID}
            reload={reload}
          />
        );
      })}
    </section>
  );
}
