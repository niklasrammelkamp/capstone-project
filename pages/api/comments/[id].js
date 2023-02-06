import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  // adding a new comment
  if (request.method === "PUT") {
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

  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------

  // delete a comment
  if (request.method === "DELETE") {
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
