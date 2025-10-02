import { Router } from "express";
import holdingRoutes from "./Holdings.routes.js";

const router = Router();

router.use("/api/holdings", holdingRoutes);

export default router;