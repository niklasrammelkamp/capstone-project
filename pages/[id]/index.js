import initialPictures from "@/store";
import PostingDetails from "@/components/PostingDetails";
import { useRouter } from "next/router";

export default function PostDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const picture = initialPictures.find((picture) => {
    return picture.id === id;
  });

  if (picture) {
    return <PostingDetails picture={picture} />;
  }
}
