import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const conn = await dbConnect();

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    if (request.method === "GET") {
      const posts = await Post.find().populate("user");
      return response.status(200).json(posts);
    }

    // ------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------

    if (request.method === "POST") {
      const token = await getToken({ req: request });

      if (token) {
        const userWithSub = await User.findOne({ sub: token.sub });

        try {
          const newPost = { ...request.body, user: userWithSub._id };

          const post = new Post(newPost);

          await post.save();

          //add a referece to the user
          await User.findByIdAndUpdate(
            { _id: userWithSub._id },
            { $push: { uploadedPosts: post._id } }
          );

          response.status(201).json({ status: "Succsefully uploaded post." });
        } catch (error) {
          console.error(error);
          response.status(400).json({ error: error.message });
        }
      }
    }
  });
  session.endSession();
}
