import { requireAuth } from "@clerk/express";
import { Router } from "express";
import {addUser } from "../controller/User.controller.js";

const router = Router();

// router.get("/info", requireAuth() , clerkUser);
// router.post("/info", handleUserSignup); // New POST route for user signup
router.post("/adduser", requireAuth(), addUser);

export default router;
