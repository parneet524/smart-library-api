import { Request, Response } from "express";
import { sendBorrowEmail } from "../services/mail.service";

export async function sendTestEmail(req: Request, res: Response) {
  try {
    const { email } = req.body;

    await sendBorrowEmail(email, "Test Book", new Date().toISOString());

    res.json({ message: "Test email sent" });
  } catch (err) {
    console.error("Failed to send test email", err);
    res.status(500).json({ error: "Email failed" });
  }
}
