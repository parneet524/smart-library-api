import * as repo from "../repositories/borrow.repo";

export async function createBorrow(bookId: string, memberId: string, dueAt?: string) {
  const now = new Date();
  const borrowedAt = now.toISOString();

  let finalDueAt = dueAt;
  if (!finalDueAt) {
    const due = new Date(now);
    due.setDate(due.getDate() + 14);
    finalDueAt = due.toISOString();
  }

  const data: repo.BorrowRecord = {
    bookId,
    memberId,
    borrowedAt,
    dueAt: finalDueAt,
    returnedAt: null
  };

  return repo.createBorrow(data);
}

export async function listBorrowRecords(memberId?: string) {
  if (memberId) {
    return repo.getBorrowByMember(memberId);
  }
  return repo.getAllBorrowRecords();
}

export async function getBorrow(id: string) {
  return repo.getBorrowById(id);
}

export async function returnBorrow(id: string) {
  return repo.markReturned(id);
}
