import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";
import styled from "styled-components";
import ProfilLink from "../ProfilLink";

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
                <Image
                  src={comment.user.image}
                  width={30}
                  height={30}
                  alt={`profile picture of ${comment.user.name}`}
                />
                <div>
                  <p>{comment.user.name}</p>
                  <p>{comment.date}</p>
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
