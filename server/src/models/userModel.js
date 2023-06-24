import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  college: { type: String, required: true },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  subscribedShops: [{ type: mongoose.Schema.Types.ObjectId, ref: "colleges" }],
});

export const UserModel = mongoose.model("user", userSchema);
