import * as repo from "../../src/repositories/books.repo";
import * as service from "../../src/services/books.service";

jest.mock("../../src/repositories/books.repo");

describe("Books Service Extra Tests", () => {
  test("should get a single book by ID", async () => {
    (repo.getBookById as jest.Mock).mockResolvedValue({
      id: "1",
      title: "Mock Book",
      author: "Mock Author",
      genre: "Fiction",
      availableCopies: 3
    });

    const result = await service.getBook("1");
    expect(result?.title).toBe("Mock Book");
    expect(repo.getBookById).toHaveBeenCalledWith("1");
  });

  test("should update a book", async () => {
    (repo.updateBook as jest.Mock).mockResolvedValue({
      id: "1",
      title: "Updated",
      author: "A1",
      genre: "G1",
      availableCopies: 5
    });

    const result = await service.updateBook("1", { title: "Updated" });
    expect(result?.title).toBe("Updated");
    expect(repo.updateBook).toHaveBeenCalled();
  });

  test("should delete a book", async () => {
    (repo.deleteBook as jest.Mock).mockResolvedValue(true);

    const ok = await service.removeBook("1");
    expect(ok).toBe(true);
    expect(repo.deleteBook).toHaveBeenCalledWith("1");
  });
});
