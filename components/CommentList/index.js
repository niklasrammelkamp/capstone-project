import SVGIcon from "@/components/SVGIcon";

export default function CommentList({ comments, onDeleteComment }) {
  return (
    <section>
      {comments.length >= 1 ? (
        comments.map((comment) => {
          return (
            <article key={comment.commentId}>
              <p>{comment.commentContent}</p>
              <button type="button" onClick={() => onDeleteComment(comment)}>
                <SVGIcon variant="bin" width="13" />
              </button>
            </article>
          );
        })
      ) : (
        <p>no comments jet</p>
      )}
    </section>
  );
}
