import initialPictures from "@/store";

export default function HomePage() {
  return (
    <>
      <h1>Foto App</h1>
      <section>
        {initialPictures.map((picture) => {
          return <p key={picture.id}>{picture.image}</p>;
        })}
      </section>
    </>
  );
}
