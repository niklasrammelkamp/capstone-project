import Image from "next/image";
import Link from "next/link";

export default function PostingPreview({ picture }) {
  return (
    <Link href={`/${picture.id}`}>
      <article>
        <Image
          src={picture.image}
          width={200}
          height={200}
          alt={picture.description}
        />
        <p>{picture.date}</p>
        <p>{picture.description.substring(0, 100)} …</p>
        <ul>
          {picture.categories.map((category) => {
            return <li key={category}>{category}</li>;
          })}
        </ul>
      </article>
    </Link>
  );
}
