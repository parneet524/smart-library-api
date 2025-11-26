import * as repo from "../repositories/books.repo";

export function createBook(data: repo.Book) {
  return repo.createBook(data);
}

export function listBooks() {
  return repo.getAllBooks();
}

export function getBook(id: string) {
  return repo.getBookById(id);
}

export function updateBook(id: string, data: Partial<repo.Book>) {
  return repo.updateBook(id, data);
}

export function removeBook(id: string) {
  return repo.deleteBook(id);
}

