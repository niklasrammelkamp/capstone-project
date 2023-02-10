import dbConnect from "@/db/connect";
import User from "@/db/models/User";
import Post from "@/db/models/Post";

export default async function handler(request, response) {
  const conn = await dbConnect();
  const { id } = request.query;

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    if (request.method === "GET") {
      const user = await User.findById(id)
        .populate({
          path: "uploadedPosts",
          model: "Post",
        })
        .populate({
          path: "likedPosts",
          model: "Post",
        });

      console.log(user);

      if (!user) {
        return response.status(404).json({ status: "Not Found" });
      }

      return response.status(200).json(user);
    }
  });
}
