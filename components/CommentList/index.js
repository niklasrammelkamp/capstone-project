import SVGIcon from "@/components/SVGIcon";
import { useState } from "react";
import styled from "styled-components";
import { StyledDate } from "../PostingDetails/StyledPostingDetails";
import ProfilLink from "../ProfilLink";
import ProfileImage from "../ProfileDetails/ProfileImage";
import Button from "../Button";
import { StyledPostingPrevHeader } from "../PostingPreview/StyledPostingPreview";

export default function CommentList({
  comments,
  onDeleteComment,
  loggedInUserID,
  postIsFromUser,
}) {
  const [commentCount, setCommentCount] = useState(5);

  const reverseComments = [...comments].reverse().slice(0, commentCount);

  return (
    <StyledCommentList>
      {reverseComments.length > 0 &&
        reverseComments.map((comment) => {
          return (
            <StyledComment key={comment._id}>
              <StyledPostingPrevHeader>
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
                {(comment.user._id === loggedInUserID || postIsFromUser) && (
                  <Button
                    variant="deleteComment"
                    type="button"
                    onClick={() => onDeleteComment(comment._id)}
                  >
                    <SVGIcon variant="bin" width="13" />
                  </Button>
                )}
              </StyledPostingPrevHeader>

              <StyledCommentContent>{comment.content}</StyledCommentContent>
            </StyledComment>
          );
        })}
      {comments.length > 5 && reverseComments.length >= commentCount && (
        <Button
          variant="filter"
          type="button"
          onClick={() => setCommentCount(commentCount + 5)}
        >
          load more comments
        </Button>
      )}
    </StyledCommentList>
  );
}

const StyledCommentList = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledComment = styled.article`
  white-space: pre-line;
  margin-bottom: 3rem;
  position: relative;
`;

const StyledCommentContent = styled.p`
  padding-left: calc(30px + 0.5rem);
  margin: 0;
`;
