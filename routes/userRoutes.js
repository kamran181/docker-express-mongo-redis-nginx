import express from "express";
import { signin, signup } from "../controllers/authController.js";

const userRouter = express.Router();

userRouter.post("/signup",signup);
userRouter.post("/signin",signin);


export default userRouter;