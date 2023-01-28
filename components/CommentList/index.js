import SVGIcon from "@/components/SVGIcon";

export default function CommentList({ comments, onDeleteComment }) {
  return (
    <section>
      {comments.length ? (
        comments.map((comment) => {
          return (
            <article key={comment.id}>
              <p>{comment.content}</p>
              <button type="button" onClick={() => onDeleteComment(comment.id)}>
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
