import Image from "next/image";
import Link from "next/link";
import ButtonLike from "../ButtonLike";
import { StyledDate } from "../PostingDetails/StyledPostingDetails";
import ProfileImage from "../ProfileDetails/ProfileImage";
import ProfilLink from "../ProfilLink";
import {
  StyledPostingPrev,
  BackgroundGradient,
  StyledPostingPrevHeader,
  StyledPostingPrevDetails,
  StyledCategories,
} from "./StyledPostingPreview";

export default function PostingPreview({ post, loggedInUserID, reload }) {
  return (
    <StyledPostingPrev>
      <BackgroundGradient />

      <StyledPostingPrevHeader variant="feed">
        <ProfilLink href={`/users/${post.user._id}`}>
          <ProfileImage
            userName={post.user.name}
            image={post.user.image}
            width={30}
          />
          <p>{post.user.name}</p>
        </ProfilLink>
        <ButtonLike
          post={post}
          loggedInUserID={loggedInUserID}
          reload={reload}
          color="var(--white)"
        />
      </StyledPostingPrevHeader>

      <Link href={`/posts/${post._id}`}>
        <Image src={post.image} fill alt={post.description} />

        <StyledPostingPrevDetails>
          <StyledDate variant="feed">{post.date}</StyledDate>

          {post.description.length > 50 ? (
            <p> {post.description.substring(0, 50)} …</p>
          ) : (
            <p>{post.description}</p>
          )}
          <StyledCategories>
            {post.categories.map((category) => {
              return <li key={category}>{category}</li>;
            })}
          </StyledCategories>
        </StyledPostingPrevDetails>
      </Link>
    </StyledPostingPrev>
  );
}
