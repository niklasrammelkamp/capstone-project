import Link from "next/link";
import Image from "next/image";

export default function ProfilePostList({ posts }) {
  return (
    <section>
      {posts.map((post) => {
        return (
          <Link href={`/posts/${post._id}`} key={post._id}>
            <Image
              src={post.image}
              width={100}
              height={100}
              alt={post.description}
            />
          </Link>
        );
      })}
    </section>
  );
}
