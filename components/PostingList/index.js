import PostingPreview from "../PostingPreview";

export default function PostingList({ posts }) {
  return (
    <section>
      {posts.map((post) => {
        return <PostingPreview post={post} key={post.id} />;
      })}
    </section>
  );
}
