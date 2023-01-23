import PostingList from "@/components/PostingList";
import initialPictures from "@/store";

export default function HomePage() {
  return (
    <>
      <h1>Foto App</h1>
      <PostingList pictures={initialPictures} />
    </>
  );
}
