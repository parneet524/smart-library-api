import * as repo from "../../../src/repositories/books.repo";

jest.mock("../../../src/config/firebase", () => ({
  db: {
    collection: () => ({
      add: jest.fn().mockResolvedValue({ id: "1" }),
      get: jest.fn().mockResolvedValue({
        docs: [
          { id: "1", data: () => ({ title: "Book A", author: "X", genre: "Y", availableCopies: 2 }) }
        ]
      }),
      doc: () => ({
        get: jest.fn().mockResolvedValue({
          exists: true,
          id: "1",
          data: () => ({ title: "Book A" })
        }),
        update: jest.fn().mockResolvedValue(null),
        delete: jest.fn().mockResolvedValue(null)
      })
    })
  }
}));

describe("Books Repo", () => {
  test("createBook", async () => {
    const result = await repo.createBook({
      title: "Book A",
      author: "X",
      genre: "Y",
      availableCopies: 2
    });

    expect(result.id).toBe("1");
  });

  test("getAllBooks", async () => {
    const result = await repo.getAllBooks();
    expect(result.length).toBe(1);
  });

  test("getBookById", async () => {
    const result = await repo.getBookById("1");
    expect(result?.title).toBe("Book A");
  });

  test("updateBook", async () => {
    const result = await repo.updateBook("1", { title: "Updated" });
    expect(result?.id).toBe("1");
  });

  test("deleteBook", async () => {
    const ok = await repo.deleteBook("1");
    expect(ok).toBe(true);
  });
});
