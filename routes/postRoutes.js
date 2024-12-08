import express from "express"
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from "../controllers/postController.js";
import { routeProtector } from "../middleware/authMiddleware.js";

const postRouter = express.Router();

postRouter
    .route("/")
    .get(routeProtector ,getAllPosts)
    .post(routeProtector,createPost);

postRouter
    .route("/:id")
    .get(routeProtector,getPostById)
    .patch(routeProtector,updatePost)
    .delete(routeProtector, deletePost);

export default postRouter;