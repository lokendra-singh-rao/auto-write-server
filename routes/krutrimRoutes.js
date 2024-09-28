import { Router } from "express";
import { krutrimControllers } from "../controllers/krutrim.js";

export const krutrimRoutes = Router();

krutrimRoutes.post("/email/generate-reply", krutrimControllers.generateEmailReply)