import { Router } from "express";
import { addHoldings, allHoldings, removeHoldings } from "../controller/Holdings.controller.js";
import { requireAuth } from "@clerk/express";

const router = Router();

router.post("/addholdings", requireAuth(), addHoldings);
router.get("/userholdings", requireAuth(), allHoldings );
router.delete("/removeuserholding", requireAuth(), removeHoldings );

export default router;