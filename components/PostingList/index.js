import PostingPreview from "../PostingPreview";

export default function PostingList({ pictures }) {
  return (
    <section>
      {pictures.map((picture) => {
        return <PostingPreview picture={picture} key={picture.id} />;
      })}
    </section>
  );
}
