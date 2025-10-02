import { Router } from "express";
import {getAllStock, getStockById } from "../controller/Stock.controller.js";

const router = Router();

router.get("/allstocks", getAllStock);
// router.get("/addStock", addallStock);
router.get("/:stockId", getStockById);

export default router;