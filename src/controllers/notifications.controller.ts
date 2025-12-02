// src/controllers/notifications.controller.ts
import { Request, Response } from "express";
import { sendBorrowEmail } from "../services/mail.service";

export async function sendTestEmail(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const result = await sendBorrowEmail(
      email,
      "Test Book",
      new Date().toISOString()
    );

    res.json({
      message: "Email component processed request",
      emailStatus: result,
    });
  } catch (err) {
    // This should basically never run now, but keep it just in case
    console.error("Unexpected error in sendTestEmail", err);
    res.status(500).json({ error: "Unexpected email error" });
  }
}
