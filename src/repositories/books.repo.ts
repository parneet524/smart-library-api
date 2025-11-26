import { db } from "../config/firebase";

const collection = db.collection("books");

export interface Book {
  id?: string;
  title: string;
  author: string;
  genre: string;
  availableCopies: number;
}

export async function createBook(data: Book): Promise<Book> {
  const docRef = await collection.add(data);
  return { id: docRef.id, ...data };
}

export async function getAllBooks(): Promise<Book[]> {
  const snap = await collection.get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as Book));
}

export async function getBookById(id: string): Promise<Book | null> {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as Book;
}

export async function updateBook(id: string, data: Partial<Book>): Promise<Book | null> {
  const ref = collection.doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;

  await ref.update(data);

  const updated = await ref.get();
  return { id: updated.id, ...updated.data() } as Book;
}

export async function deleteBook(id: string): Promise<boolean> {
  const ref = collection.doc(id);
  const doc = await ref.get();
 	if (!doc.exists) return false;

  await ref.delete();
  return true;
}
