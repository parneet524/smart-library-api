import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const SENDGRID_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@smartlibrary.com";

if (!SENDGRID_KEY) {
  console.warn("⚠️ SENDGRID_API_KEY not set – email will NOT be sent");
} else {
  sgMail.setApiKey(SENDGRID_KEY);
}

export async function sendBorrowEmail(to: string, bookTitle: string, dueAt: string) {
  if (!SENDGRID_KEY) {
    console.log("Skipping email (no SENDGRID_API_KEY).");
    return;
  }

  const msg = {
    to,
    from: FROM_EMAIL,
    subject: `You borrowed "${bookTitle}"`,
    text: `You borrowed ${bookTitle}. It is due on ${dueAt}.`,
    html: `
      <h2>Borrow Confirmation</h2>
      <p>You borrowed <strong>${bookTitle}</strong>.</p>
      <p><strong>Return by:</strong> ${dueAt}</p>
    `
  };

  await sgMail.send(msg);
}
