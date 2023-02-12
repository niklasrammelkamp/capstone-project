import UploadForm from "@/components/UploadForm";
import { useRouter } from "next/router";
import { initialCategories } from "@/store/categories";
import { useSession } from "next-auth/react";
import LogIn from "@/components/LogIn";

// For the search function I got inspierd by: https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ReactwithMasoud

export default function UploadPage() {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubmit(post) {
    try {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.error(`Error: ${response.status}`);
        alert("something went wrong. Please try again.");
        router.reload();
      }
    } catch (error) {
      console.error(error.message);
      alert("something went wrong. Please try again.");
      router.reload();
    }
  }

  if (session) {
    return (
      <UploadForm
        initialCategories={initialCategories}
        onSubmit={handleSubmit}
      />
    );
  }
  return <LogIn />;
}
