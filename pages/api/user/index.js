import dbConnect from "@/db/connect";
import Post from "@/db/models/Post";
import User from "@/db/models/User";
import Comment from "@/db/models/Comment";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  const conn = await dbConnect();

  const session = await conn.startSession();
  await session.withTransaction(async () => {
    const token = await getToken({ req: request });

    if (token) {
      switch (request.method) {
        case "GET": {
          const userWithSub = await User.findOne({ userID: token.sub });

          if (!userWithSub) {
            const thisYear = new Date().getFullYear();

            const newUser = new User({
              name: token.name,
              image: token.picture,
              bio: "",
              regestrationYear: thisYear.toString(),
              userID: token.sub,
            });

            await newUser.save();

            return response.status(200).json(newUser);
          }
          if (userWithSub) {
            const user = await User.findOne({ userID: token.sub })
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
        }
        case "PUT": {
          await User.findOneAndUpdate(
            { userID: token.sub },
            {
              $set: request.body,
            }
          );

          return response.status(200).json({ status: "User updated" });
        }
      }
    }
  });
  session.endSession();
}
