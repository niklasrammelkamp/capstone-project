import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  image: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  categories: [String],
  settings: {
    film: String,
    aperture: String,
    time: String,
    lens: String,
    camera: String,
  },
  likes: [String],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
