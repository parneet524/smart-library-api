import { listBooks } from "../../src/controllers/books.controller";
import * as service from "../../src/services/books.service";

describe("Books Controller (Unit)", () => {
  test("listBooks should return json array", async () => {
    const mockBooks = [{ id: "1", title: "A" }];
    // @ts-ignore
    jest.spyOn(service, "listBooks").mockResolvedValue(mockBooks);

    const req: any = {};
    const res: any = {
      json: jest.fn()
    };

    await listBooks(req, res);

    expect(res.json).toHaveBeenCalledWith(mockBooks);
  });
});
