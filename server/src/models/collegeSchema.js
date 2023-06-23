import mongoose from "mongoose";
import { Schema } from "mongoose";

const collegeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  shops: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String },
    },
  ],
});

export const CollegeModel = mongoose.model("college", collegeSchema);
