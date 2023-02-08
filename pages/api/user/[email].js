import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";
import { getToken } from "next-auth/jwt";
import { use } from "react";

export default async function handler(request, response) {
  const conn = await dbConnect();

  const { email } = request.query;

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    if (request.method === "GET") {
      const token = await getToken({ req: request });
      console.log("TOKEN", token);

      if (token) {
        const userWithSub = await User.findOne({ sub: token.sub });

        if (!userWithSub) {
          const user = new User({
            name: token.name,
            email: token.email,
            image: token.picture,
            bio: "",
            regestrationYear: "2022",
            sub: token.sub,
          });

          console.log("USER", user);

          await user.save();
        }
        if (userWithSub) {
          userWithSub
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

          console.log("USERWITHSUB", userWithSub);

          return response.status(200).json(user);
        }
      }

      // const user = await User.findOne({ email: email });

      // if (!user) {
      //   return response.status(404).json({ status: "Not Found" });
      // }

      // return response.status(200).json(user);
    }
  });
  session.endSession();
}
