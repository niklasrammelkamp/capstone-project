import UploadForm from "@/components/UploadForm";
import { globalPictures } from "@/store";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

// For the search function I got inspierd by: https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ReactwithMasoud

const initialCategories = [
  "Landscapes",
  "Animals",
  "Portraits",
  "Architecture",
  "Food",
  "Nature",
  "Sports",
  "Cars",
  "People",
  "Flowers",
  "Seascapes",
  "Street photography",
  "Abstract",
  "Travel",
  "Weddings",
  "Fashion",
  "Wildlife",
  "Urban",
  "Sunsets",
  "Family",
  "Black and white",
  "Beaches",
  "Night photography",
  "Performance art",
  "Clouds",
  "Children",
  "Macro photography",
  "Interiors",
  "Fireworks",
  "Festivals",
  "Still life",
  "Mountains",
  "Forests",
  "Waterfalls",
  "Cityscapes",
  "Birds",
  "Skyscrapers",
  "Sunrises",
  "Musical instruments",
  "Artistic nudes",
  "Urban exploration",
  "Deserts",
  "Reflections",
  "Nature close-ups",
  "Cultural events",
  "Religious ceremonies",
  "Space and astronomy",
  "Vintage",
  "Fantasy and surreal",
  "Street art",
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
