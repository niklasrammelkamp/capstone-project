import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Button from "../Button";
import ButtonLike from "../ButtonLike";
import ProfilLink from "../ProfilLink";
import SVGIcon from "../SVGIcon";

export default function PostingPreview({ post, loggedInUserID, reload }) {
  return (
    <StyledPostingPrev>
      <StyledPostingPrevHeader>
        <ProfilLink href={`/users/${post.user._id}`}>
          <Image
            src={post.user.image}
            width={30}
            height={30}
            alt={`profile picture of ${post.user.name}`}
          />
          <p>{post.user.name}</p>
        </ProfilLink>
        <ButtonLike
          post={post}
          loggedInUserID={loggedInUserID}
          reload={reload}
        />
      </StyledPostingPrevHeader>
      <Link href={`/posts/${post._id}`}>
        <div>
          <Image
            src={post.image}
            width={200}
            height={200}
            alt={post.description}
          />
          <p>{post.date}</p>

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
        </div>
      </Link>
    </StyledPostingPrev>
  );
}

const StyledPostingPrev = styled.article`
  margin-bottom: 50px;
`;

const StyledPostingPrevHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
