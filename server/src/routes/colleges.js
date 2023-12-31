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

//get shops only
router.get("/getShops/:collegeID", async (req, res) => {
  try {
    const college = await CollegeModel.findById(req.params.collegeID);

    if (!college) {
      return res.status(404).json({ error: "College not found" });
    }

    const shops = college.shops;

    res.json({ shops });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
export { router as collegesRouter };
