import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";

export default async function handler(request, response) {
  const conn = await dbConnect();
  const { id } = request.query;

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    switch (request.method) {
      case "GET": {
        // getting a single post
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

      case "PUT": {
        // like post
        const userID = request.body;
        await Post.findByIdAndUpdate({ _id: id }, { $push: { likes: userID } });
        await User.findByIdAndUpdate(
          { _id: userID },
          { $push: { likedPosts: id } }
        );

        return response.status(200).json({ status: "liked :)" });
      }

      case "DELETE": {
        const { userID } = request.body;
        if (request.body.about === "disLike") {
          await Post.findByIdAndUpdate(
            { _id: id },
            { $pull: { likes: userID } }
          );
          await User.findByIdAndUpdate(
            { _id: userID },
            { $pull: { likedPosts: id } }
          );

          return response.status(200).json({ status: "disliked :)" });
        }

        if (request.body.about === "deletePost") {
          const post = await Post.findByIdAndDelete(id);
          await User.updateMany(
            { $or: [{ uploadedPosts: id }, { likedPosts: id }] },
            { $pull: { uploadedPosts: id, likedPosts: id } }
          );

          if (!post) {
            return response.status(404).json({ status: "Not Found" });
          }

          return response.status(200).json(post);
        }
      }
    }
  });
  session.endSession();
}
