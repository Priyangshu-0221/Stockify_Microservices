import { Router } from "express";
import stockRoutes from "./Stock.routes.js";
const router = Router();

router.use("/api/stock", stockRoutes);

export default router;