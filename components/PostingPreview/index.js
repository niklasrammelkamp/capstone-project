import Image from "next/image";
import Link from "next/link";

export default function PostingPreview({ post }) {
  return (
    <Link href={`/${post.id}`}>
      <article>
        <Image
          src={post.image}
          width={200}
          height={200}
          alt={post.description}
        />
        <p>{post.date}</p>
        <p>{post.description.substring(0, 100)} …</p>
        <ul>
          {post.categories.map((category) => {
            return <li key={category}>{category}</li>;
          })}
        </ul>
      </article>
    </Link>
  );
}
