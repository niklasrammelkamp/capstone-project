import UploadForm from "@/components/UploadForm";
import initialPictures from "@/store";
import { useRouter } from "next/router";

// For the search function I got inspierd by: https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ReactwithMasoud

const initialCategories = [
  "mountain",
  "forest",
  "sunset",
  "bw",
  "landscape",
  "long exposure",
  "night",
  "moon",
  "portrait",
  "city",
  "people",
];

export default function UploadPage() {
  const router = useRouter();

  function handleSubmit(picture) {
    initialPictures.push(picture);
    console.log(initialPictures);
    router.push("/");
  }
  return (
    <UploadForm initialCategories={initialCategories} onSubmit={handleSubmit} />
  );
}
