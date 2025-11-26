import { listBorrowRecords } from "../../src/controllers/borrow.controller";
import * as service from "../../src/services/borrow.service";

describe("Borrow Controller (Unit)", () => {
  test("listBorrowRecords returns array", async () => {
    const mockData = [{ id: "B1", bookId: "BK1", memberId: "M1" }];

    // @ts-ignore
    jest.spyOn(service, "listBorrowRecords").mockResolvedValue(mockData);

    const req: any = { query: {} };
    const res: any = {
      json: jest.fn()
    };

    await listBorrowRecords(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });
});
