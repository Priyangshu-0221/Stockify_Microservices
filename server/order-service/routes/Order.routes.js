import { Router } from "express";
import { addOrder, allOrder, removeOrder } from "../controller/Order.controller.js";
import { requireAuth } from "@clerk/express";

const router = Router();

router.post("/addorder", requireAuth(), addOrder);
router.get("/userorder",  requireAuth(), allOrder);
router.delete("/removeuserorder", requireAuth(), removeOrder);

export default router;