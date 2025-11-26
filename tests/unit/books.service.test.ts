import * as repo from "../../src/repositories/books.repo";
import * as service from "../../src/services/books.service";

jest.mock("../../src/repositories/books.repo");

describe("Books Service", () => {
  test("should get all books", async () => {
    (repo.getAllBooks as jest.Mock).mockResolvedValue([
      { id: "1", title: "Book A" }
    ]);

    const result = await service.listBooks();

    expect(result[0].title).toBe("Book A");
  });
});
