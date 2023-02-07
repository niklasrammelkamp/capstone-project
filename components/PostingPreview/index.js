import Image from "next/image";
import Link from "next/link";

export default function PostingPreview({ post }) {
  return (
    <Link href={`/posts/${post._id}`}>
      <article>
        <Image
          src={post.image}
          width={200}
          height={200}
          alt={post.description}
        />
        <p>{post.date}</p>
        <Image
          src={post.user.image}
          width={30}
          height={30}
          alt={`profile picture of ${post.user.name}`}
        />
        <p>{post.user.name}</p>
        {post.description.length > 100 ? (
          <p> {post.description.substring(0, 100)} …</p>
        ) : (
          <p>{post.description}</p>
        )}
        <ul>
          {post.categories.map((category) => {
            return <li key={category}>{category}</li>;
          })}
        </ul>
      </article>
    </Link>
  );
}
