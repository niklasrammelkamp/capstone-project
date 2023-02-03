import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  user: { type: String, required: true },
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
  comments: [String],
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
