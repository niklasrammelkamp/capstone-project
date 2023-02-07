import mongoose from "mongoose";

const { Schema } = mongoose;

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  content: String,
  date: String,
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
});

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
