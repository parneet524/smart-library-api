import { db } from "../config/firebase";

const collection = db.collection("borrowRecords");

export interface BorrowRecord {
  id?: string;
  bookId: string;
  memberId: string;
  borrowedAt: string;   // ISO date string
  dueAt: string;        // ISO date string
  returnedAt?: string | null; // null if not returned
}

export async function createBorrow(
  data: BorrowRecord
): Promise<BorrowRecord> {
  const docRef = await collection.add(data);
  return { id: docRef.id, ...data };
}

export async function getBorrowById(id: string): Promise<BorrowRecord | null> {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as BorrowRecord;
}

export async function getAllBorrowRecords(): Promise<BorrowRecord[]> {
  const snap = await collection.get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as BorrowRecord));
}

export async function getBorrowByMember(
  memberId: string
): Promise<BorrowRecord[]> {
  const snap = await collection.where("memberId", "==", memberId).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() } as BorrowRecord));
}

export async function markReturned(id: string): Promise<BorrowRecord | null> {
  const ref = collection.doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;

  const returnedAt = new Date().toISOString();
  await ref.update({ returnedAt });

  const updated = await ref.get();
  return { id: updated.id, ...updated.data() } as BorrowRecord;
}
