import * as repo from "../../../src/repositories/borrow.repo";

jest.mock("../../../src/config/firebase", () => ({
  db: {
    collection: () => ({
      add: jest.fn().mockResolvedValue({ id: "B1" }),
      get: jest.fn().mockResolvedValue({
        docs: [
          {
            id: "B1",
            data: () => ({
              bookId: "1",
              memberId: "M1",
              borrowedAt: "2024",
              dueAt: "2024",
              returnedAt: null
            })
          }
        ]
      }),
      where: () => ({
        get: jest.fn().mockResolvedValue({
          docs: [
            {
              id: "B1",
              data: () => ({
                bookId: "1",
                memberId: "M1",
                borrowedAt: "2024",
                dueAt: "2024"
              })
            }
          ]
        })
      }),
      doc: () => ({
        get: jest.fn().mockResolvedValue({
          exists: true,
          id: "B1",
          data: () => ({ bookId: "1" })
        }),
        update: jest.fn().mockResolvedValue(null)
      })
    })
  }
}));

describe("Borrow Repo", () => {
  test("createBorrow", async () => {
    const result = await repo.createBorrow({
      bookId: "1",
      memberId: "M1",
      borrowedAt: "2024",
      dueAt: "2024",
      returnedAt: null
    });
    expect(result.id).toBe("B1");
  });

  test("getAllBorrowRecords", async () => {
    const result = await repo.getAllBorrowRecords();
    expect(result.length).toBe(1);
  });

  test("getBorrowById", async () => {
    const result = await repo.getBorrowById("B1");
    expect(result?.bookId).toBe("1");
  });

  test("getBorrowByMember", async () => {
    const result = await repo.getBorrowByMember("M1");
    expect(result.length).toBe(1);
  });

  test("markReturned", async () => {
    const result = await repo.markReturned("B1");
    expect(result?.id).toBe("B1");
  });
});
