import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";

export default async function handler(request, response) {
  const conn = await dbConnect();
  const { id } = request.query;

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    switch (request) {
      case "PUT": {
        // adding a new comment
        const comment = await Comment.create(request.body);

        //add a referece to the post
        await Post.findByIdAndUpdate(
          { _id: id },
          { $push: { comments: comment._id } }
        );

        //add a referece to the user
        await User.findByIdAndUpdate(
          { _id: comment.user },
          { $push: { comments: comment._id } }
        );

        if (!comment) {
          return response.status(404).json({ status: "Not Found" });
        }

        return response.status(200).json({ status: "Added Comment" });
      }

      case "DELETE": {
        // delete a comment
        const comment = await Comment.findByIdAndDelete(id);

        // removing reference by post
        await Post.findByIdAndUpdate(
          { _id: comment.post },
          { $pull: { comments: id } }
        );

        // removing reference by user
        await User.findByIdAndUpdate(
          { _id: comment.user },
          { $pull: { comments: id } }
        );

        if (!comment) {
          return response.status(404).json({ status: "Not Found" });
        }

        return response.status(200).json(comment);
      }
    }

    // ------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------

    if (request.method === "DELETE") {
    }
  });
  session.endSession();
}
