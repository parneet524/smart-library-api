import { Request, Response } from "express";
import * as service from "../services/books.service";

export async function createBook(req: Request, res: Response) {
  const book = await service.createBook(req.body);
  res.status(201).json(book);
}

export async function listBooks(_req: Request, res: Response) {
  const books = await service.listBooks();
  res.json(books);
}

export async function getBook(req: Request, res: Response) {
  const book = await service.getBook(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
}

export async function updateBook(req: Request, res: Response) {
  const updated = await service.updateBook(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Book not found" });

  res.json(updated);
}

export async function deleteBook(req: Request, res: Response) {
  const ok = await service.removeBook(req.params.id);
  if (!ok) return res.status(404).json({ message: "Book not found" });

  res.status(204).send();
}
