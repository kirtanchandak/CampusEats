import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  college: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  subscribedShops: [
    {
      shopID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "colleges.shops",
        required: true,
      },
      shop: {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, default: "" },
      },
    },
  ],
});

export const UserModel = mongoose.model("user", userSchema);
