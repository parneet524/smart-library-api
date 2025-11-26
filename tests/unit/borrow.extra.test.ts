import * as repo from "../../src/repositories/borrow.repo";
import * as service from "../../src/services/borrow.service";

jest.mock("../../src/repositories/borrow.repo");

describe("Borrow Service Extra Tests", () => {
  test("should get borrow record by ID", async () => {
    (repo.getBorrowById as jest.Mock).mockResolvedValue({
      id: "B1",
      bookId: "BOOK1",
      memberId: "MEM1",
      borrowedAt: "2024-01-01",
      dueAt: "2024-01-15",
      returnedAt: null
    });

    const result = await service.getBorrow("B1");
    expect(result?.bookId).toBe("BOOK1");
  });

  test("should list borrow records for a member", async () => {
    (repo.getBorrowByMember as jest.Mock).mockResolvedValue([
      { id: "1", memberId: "M1", bookId: "B1" }
    ]);

    const result = await service.listBorrowRecords("M1");
    expect(result.length).toBe(1);
    expect(result[0].memberId).toBe("M1");
  });

  test("should mark a borrow as returned", async () => {
    (repo.markReturned as jest.Mock).mockResolvedValue({
      id: "1",
      returnedAt: "2024-01-20"
    });

    const result = await service.returnBorrow("1");
    expect(result?.returnedAt).toBe("2024-01-20");
  });
});
