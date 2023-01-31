import Link from "next/link";
import Image from "next/image";

export default function ProfilePictureList({ pictures }) {
  return (
    <section>
      <p>uploads</p>
      {pictures.map((picture) => {
        return (
          <Link href={`/${picture.id}`} key={picture.id}>
            <Image
              src={picture.image}
              width={100}
              height={100}
              alt={picture.description}
            />
          </Link>
        );
      })}
    </section>
  );
}
