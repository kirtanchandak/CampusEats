import express from "express";
import { CollegeModel } from "../models/collegeSchema.js";

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    // Fetch data from the MongoDB collection
    const documents = await CollegeModel.find({}).exec();

    // Process the retrieved documents
    res.json(documents);
  } catch (err) {
    console.error("Error fetching data from MongoDB:", err);
    res.status(500).json({ error: "Failed to fetch data from the database" });
  }
});

export { router as collegesRouter };
