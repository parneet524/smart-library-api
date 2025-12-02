import { listMembers } from "../../src/controllers/members.controller";
import * as service from "../../src/services/members.service";

describe("Members Controller (Unit)", () => {
  test("listMembers should return json array", async () => {
    const mockMembers = [{ id: "M1", name: "Parneet" }];

    // @ts-ignore
    jest.spyOn(service, "listMembers").mockResolvedValue(mockMembers);

    const req: any = {};
    const res: any = {
      json: jest.fn()
    };

    await listMembers(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
