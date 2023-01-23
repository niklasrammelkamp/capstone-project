import initialPictures from "@/store";
import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";

export default function PostDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  console.log(typeof id);

  const picture = initialPictures.find((picture) => {
    console.log(picture.id);
    return picture.id === id;
  });

  console.log(picture);

  if (!picture) {
    return <p>is loading</p>;
  }

  return <PostingDetails picture={picture} />;
}
{
  /* <PostingDetails picture={picture} />; */
}
