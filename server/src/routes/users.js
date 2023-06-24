import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password, college, name, slug } = req.body;
  const user = await UserModel.findOne({ username });
  const hashedPassword = await bcrypt.hash(password, 10);

  if (user) {
    return res.json({ message: "User already exists" });
  }

  const newUser = new UserModel({
    username,
    password: hashedPassword,
    college,
    name,
    slug,
  });
  await newUser.save();

  res.json({ message: "User added successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (!user) {
    return res.json({ message: "Please register first and then login" });
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return res.json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({
    token,
    userID: user._id,
    slug: user.slug,
    username: user.username,
    name: user.name,
    college: user.college,
  });
});

//middleware
export const authVerifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (err) => {
      if (err) return res.sendStatus(403);
      next();
    });
  } else {
    return res.sendStatus(401);
  }
};

export { router as userRouter };
