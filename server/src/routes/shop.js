import express from "express";
import { CollegeModel } from "../models/collegeSchema.js";
import { UserModel } from "../models/userModel.js";

const router = express.Router();

router.put("/", async (req, res) => {
  try {
    const college = await CollegeModel.findById(req.body.collegeID);
    const shopID = req.body.shopID;
    const shop = college.shops.find((shop) => shop._id.toString() === shopID);
    const user = await UserModel.findById(req.body.userID);
    try {
      if (!Array.isArray(user.subscribedShops)) {
        user.subscribedShops = [];
      }
      user.subscribedShops.push(shopID);
      await user.save();
      res.json({ subscribedShops: user.subscribedShops });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export { router as shops };
