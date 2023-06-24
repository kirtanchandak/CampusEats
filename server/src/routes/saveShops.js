import express from "express";
import { CollegeModel } from "../models/collegeSchema.js";
import { UserModel } from "../models/userModel.js";

const router = express.Router();

// to save shops
router.put("/", async (req, res) => {
  try {
    const college = await CollegeModel.findOne({ slug: req.body.slug });
    const shopID = req.body.shopID;
    const shop = college.shops.find((shop) => shop._id.toString() === shopID);
    const user = await UserModel.findById(req.body.userID);
    try {
      if (!Array.isArray(user.subscribedShops)) {
        user.subscribedShops = [];
      }
      const subscribedShop = {
        shopID: shopID,
        shop: shop,
      };
      user.subscribedShops.push(subscribedShop);
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

//to fetch saved shops
router.get("/:userID", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.userID);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const savedSubscriptions = user.subscribedShops.filter(
      (shop) => shop !== null
    );

    res.json(savedSubscriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export { router as saveShops };
