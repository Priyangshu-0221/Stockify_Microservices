import { Router } from "express";
import { addWatchlist, getUserWatchlist, removeUserWatchlist } from "../controller/WatchList.controller.js";
import { requireAuth } from "@clerk/express";

const router = Router();

router.post("/addwatchlist", requireAuth() , addWatchlist);
router.get("/userwatchlists", requireAuth(), getUserWatchlist );
router.delete("/removeuserwatchlist", requireAuth(), removeUserWatchlist );

export default router;