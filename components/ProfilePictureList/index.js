import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function ProfilePostList({ posts }) {
  return (
    <StyledProfilePostList>
      {posts.map((post) => {
        return (
          <StyledPostThumb key={post._id}>
            <Link href={`/posts/${post._id}`}>
              <Image
                src={post.image}
                width={200}
                height={200}
                alt={post.description}
              />
            </Link>
          </StyledPostThumb>
        );
      })}
    </StyledProfilePostList>
  );
}

const StyledProfilePostList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

const StyledPostThumb = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  background-color: var(--white);
  border-radius: 0.7rem;

  & > a > img {
    width: auto;
    aspect-ratio: 4 / 5;
    border-radius: 0.7rem;
    position: absolute;
    height: 100%;
    object-fit: cover;
    min-width: 100%;
    z-index: 0;
  }
`;
