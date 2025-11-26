import { Router } from "express";
import { sendTestEmail } from "../controllers/notifications.controller";

const router = Router();

router.post("/test", sendTestEmail);

export default router;
