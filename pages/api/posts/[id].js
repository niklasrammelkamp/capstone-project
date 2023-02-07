import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";

export default async function handler(request, response) {
  const conn = await dbConnect();
  const { id } = request.query;

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    // getting a single post
    if (request.method === "GET") {
      const post = await Post.findById(id)
        .populate({
          path: "user",
          model: "User",
        })
        .populate({
          path: "comments",
          model: "Comment",
          populate: {
            path: "user",
            model: "User",
          },
        });

      if (!post) {
        return response.status(404).json({ status: "Not Found" });
      }

      return response.status(200).json(post);
    }

    // like post
    if (request.method === "PUT") {
      const userID = request.body;
      console.log(userID);
      await Post.findByIdAndUpdate({ _id: id }, { $push: { likes: userID } });
      await User.findByIdAndUpdate(
        { _id: userID },
        { $push: { likedPosts: id } }
      );

      return response.status(200).json({ status: "liked :)" });
    }

    // dislike post
    if (request.method === "DELETE") {
      const userID = request.body;
      await Post.findByIdAndUpdate({ _id: id }, { $pull: { likes: userID } });
      await User.findByIdAndUpdate(
        { _id: userID },
        { $pull: { likedPosts: id } }
      );

      return response.status(200).json({ status: "disliked :)" });
    }
  });
  session.endSession();
}
