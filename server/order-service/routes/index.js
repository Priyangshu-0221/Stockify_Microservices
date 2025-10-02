import { Router } from "express";
import orderRoutes from "./Order.routes.js";

const router = Router();

// Test route to verify service is working
router.get("/test", (req, res) => {
  res.json({ message: "Order service is working!" });
});

router.use("/api/orders", orderRoutes);

export default router;