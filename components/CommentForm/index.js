import SVGIcon from "@/components/SVGIcon";
import Textarea from "@/components/Textarea";

export default function CommentForm({ onAddComment }) {
  function handleSubmit(event) {
    event.preventDefault();

    onAddComment(event.target.elements.comment.value);

    event.target.reset();
  }

  return (
    <>
      <h2>Comments</h2>
      <form onSubmit={handleSubmit}>
        <Textarea id="comment" name="comment" label={"comment"} />
        <button type="submit">
          <SVGIcon variant="send" color="black" width="24" />
        </button>
      </form>
    </>
  );
}
