import { Router } from "express";
import userRoutes from "./User.route.js"
const router = Router();

router.use("/api/user", userRoutes);

export default router;
