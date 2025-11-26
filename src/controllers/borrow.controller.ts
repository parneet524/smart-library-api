import { Request, Response } from "express";
import * as service from "../services/borrow.service";

export async function createBorrow(req: Request, res: Response) {
  const { bookId, memberId, dueAt } = req.body;

  try {
    const record = await service.createBorrow(bookId, memberId, dueAt);
    res.status(201).json(record);
  } catch (err) {
    console.error("Error creating borrow record", err);
    res.status(500).json({ message: "Failed to create borrow record" });
  }
}

export async function listBorrowRecords(req: Request, res: Response) {
  try {
    const memberId = req.query.memberId as string | undefined;
    const records = await service.listBorrowRecords(memberId);
    res.json(records);
  } catch (err) {
    console.error("Error listing borrow records", err);
    res.status(500).json({ message: "Failed to list borrow records" });
  }
}

export async function getBorrow(req: Request, res: Response) {
  try {
    const record = await service.getBorrow(req.params.id);
    if (!record) {
      return res.status(404).json({ message: "Borrow record not found" });
    }
    res.json(record);
  } catch (err) {
    console.error("Error fetching borrow record", err);
    res.status(500).json({ message: "Failed to get borrow record" });
  }
}

export async function returnBook(req: Request, res: Response) {
  try {
    const updated = await service.returnBorrow(req.params.id);
    if (!updated) {
      return res.status(404).json({ message: "Borrow record not found" });
    }
    res.json(updated);
  } catch (err) {
    console.error("Error marking borrow as returned", err);
    res.status(500).json({ message: "Failed to mark as returned" });
  }
}
