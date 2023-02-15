import SVGIcon from "@/components/SVGIcon";
import Textarea from "@/components/Textarea";
import styled from "styled-components";
import Button from "../Button";

export default function CommentForm({ onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    onAddComment(event.target.elements.comment.value);

    event.target.reset();
    event.target.elements.comment.style.height = "4rem";
    event.target.elements.comment.focus();
  }

  return (
    <>
      <StyledCommentForm onSubmit={handleSubmit}>
        <Textarea
          id="comment"
          label="write comment"
          isRequired={true}
          maxLength={100}
        />
        <Button variant="roundButton" type="submit">
          <SVGIcon variant="send" color="var(--white)" width="24" />
        </Button>
      </StyledCommentForm>
    </>
  );
}

const StyledCommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
