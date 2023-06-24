import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";

const router = express.Router();
dotenv.config({ path: "./.env" });

const instance = new Razorpay({
  key_id: process.env.RZP_KEY_ID,
  key_secret: process.env.RZP_KEY_SECRET,
});

router.post("/registerplan", (req, res) => {
  instance.plans.create(req.body, (err, plan) => {
    if (err) {
      console.log(err);
    } else {
      res.json(plan);
    }
  });
});

router.post("/createSubscription", (req, res) => {
  instance.subscriptions.create(req.body, (err, subscription) => {
    if (err) {
      console.log(err);
    } else {
      res.json(subscription);
    }
  });
});

export { router as subscriptionRouter };
