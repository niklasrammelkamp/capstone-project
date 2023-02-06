import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

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
}
