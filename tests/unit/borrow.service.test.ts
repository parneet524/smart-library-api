import * as repo from "../../src/repositories/borrow.repo";
import * as service from "../../src/services/borrow.service";

jest.mock("../../src/repositories/borrow.repo");

describe("Borrow Service", () => {
  test("should create a borrow record", async () => {
    (repo.createBorrow as jest.Mock).mockResolvedValue({
      id: "1",
      memberId: "M1",
      bookId: "B1",
      borrowedAt: "2025-01-01",
      dueAt: "2025-01-10",
      returnedAt: null
    });

    const result = await service.createBorrow("B1", "M1");

    expect(result.id).toBe("1");
    expect(result.bookId).toBe("B1");
    expect(result.memberId).toBe("M1");
  });
});
