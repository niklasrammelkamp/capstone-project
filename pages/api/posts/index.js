import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const posts = await Post.find().populate("user");
    return response.status(200).json(posts);
  }

  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------

  if (request.method === "POST") {
    try {
      const post = new Post(request.body);

      await post.save();

      //add a referece to the user
      await User.findByIdAndUpdate(
        { _id: post.user },
        { $push: { uploadedPosts: post._id } }
      );

      response.status(201).json({ status: "Succsefully uploaded post." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
