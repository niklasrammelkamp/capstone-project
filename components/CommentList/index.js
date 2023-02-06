import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";
import styled from "styled-components";

export default function CommentList({ comments, onDeleteComment }) {
  return (
    <section>
      {comments.length ? (
        comments.map((comment) => {
          return (
            <StyledComment key={comment._id}>
              <Image
                src={comment.user.image}
                width={30}
                height={30}
                alt={`profile picture of ${comment.user.name}`}
              />
              <p>{comment.user.name}</p>
              <p>{comment.date}</p>
              <p>{comment.content}</p>
              <button
                type="button"
                onClick={() => onDeleteComment(comment._id)}
              >
                <SVGIcon variant="bin" width="13" />
              </button>
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
