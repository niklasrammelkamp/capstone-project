import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const conn = await dbConnect();

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    if (request.method === "GET") {
      const token = await getToken({ req: request });

      if (token) {
        const userWithSub = await User.findOne({ sub: token.sub });

        if (!userWithSub) {
          const thisYear = new Date().getFullYear();

          const newUser = new User({
            name: token.name,
            image: token.picture,
            bio: "",
            regestrationYear: thisYear.toString(),
            sub: token.sub,
          });

          await newUser.save();

          return response.status(200).json(newUser);
        }
        if (userWithSub) {
          const user = await User.findOne({ sub: token.sub })
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

          return response.status(200).json(user);
        }
      }
    }
  });
  session.endSession();
}
