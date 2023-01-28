import UploadForm from "@/components/UploadForm";
import { globalPictures } from "@/store";
import { useAtom } from "jotai";
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
  const [pictures, setPictures] = useAtom(globalPictures);
  const router = useRouter();

  function handleSubmit(picture) {
    setPictures([...pictures, picture]);
    router.push("/");
  }
  return (
    <UploadForm initialCategories={initialCategories} onSubmit={handleSubmit} />
  );
}
