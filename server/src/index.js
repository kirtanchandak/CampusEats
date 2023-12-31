import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
import { collegesRouter } from "./routes/colleges.js";
import { subscriptionRouter } from "./routes/subscription.js";
import { saveShops } from "./routes/saveShops.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/colleges", collegesRouter);
app.use("/subscription", subscriptionRouter);
app.use("/saveSubscription", saveShops);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server has started on port 5000");
});
