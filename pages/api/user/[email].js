import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";

export default async function handler(request, response) {
  const conn = await dbConnect();
  const { email } = request.query;

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    if (request.method === "GET") {
      const user = await User.findOne({ email: email })
        .populate({
          path: "uploadedPosts",
          model: "Post",
        })
        .populate({
          path: "likedPosts",
          model: "Post",
        })
        .populate({
          path: "comments",
          model: "Comment",
        });

      if (!user) {
        return response.status(404).json({ status: "Not Found" });
      }

      return response.status(200).json(user);
    }
  });
}
