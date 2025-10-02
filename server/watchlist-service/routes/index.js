import { Router } from "express";
import watchlistRoutes from "./Watchlist.routes.js";

const router = Router();

router.use("/api/watchlist", watchlistRoutes );

export default router;