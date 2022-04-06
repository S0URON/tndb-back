import { Router } from "express";
import { addReview } from "../controllers/reviews/addReview";
import { authMiddleware, roleGuard } from "../middlewares/auth";


const routes = new Router();

routes.post("/add", authMiddleware, addReview);

export default routes;