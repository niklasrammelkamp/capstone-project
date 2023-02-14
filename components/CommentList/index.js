import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";
import styled from "styled-components";
import { StyledDate } from "../PostingDetails/StyledPostingDetails";
import ProfilLink from "../ProfilLink";
import ProfileImage from "../ProfileDetails/ProfileImage";

export default function CommentList({
  comments,
  onDeleteComment,
  loggedInUserID,
  postIsFromUser,
}) {
  return (
    <section>
      {comments.length ? (
        comments.map((comment) => {
          return (
            <StyledComment key={comment._id}>
              <ProfilLink href={`/users/${comment.user._id}`}>
                <ProfileImage
                  userName={comment.user.name}
                  image={comment.user.image}
                  width={30}
                />
                <div>
                  <p>{comment.user.name}</p>
                  <StyledDate>{comment.date}</StyledDate>
                </div>
              </ProfilLink>

              <p>{comment.content}</p>
              {(comment.user._id === loggedInUserID || postIsFromUser) && (
                <button
                  type="button"
                  onClick={() => onDeleteComment(comment._id)}
                >
                  <SVGIcon variant="bin" width="13" />
                </button>
              )}
            </StyledComment>
          );
        })
      ) : (
        <p>no comments jet</p>
      )}
    </section>
  );
}

const StyledComment = styled.article`
  white-space: pre-line;
`;
