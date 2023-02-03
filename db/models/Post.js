import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: {}, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
