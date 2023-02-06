import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const posts = await Post.find().populate("user");
    return response.status(200).json(posts);
  }
}
