import * as repo from "../../../src/repositories/members.repo";

jest.mock("../../../src/config/firebase", () => ({
  db: {
    collection: () => ({
      add: jest.fn().mockResolvedValue({ id: "M1" }),
      get: jest.fn().mockResolvedValue({
        docs: [
          { id: "M1", data: () => ({ name: "John", email: "a@test.com", isActive: true }) }
        ]
      }),
      doc: () => ({
        get: jest.fn().mockResolvedValue({
          exists: true,
          id: "M1",
          data: () => ({ name: "John" })
        }),
        update: jest.fn().mockResolvedValue(null),
        delete: jest.fn().mockResolvedValue(null)
      })
    })
  }
}));

describe("Members Repo", () => {
  test("createMember", async () => {
    const result = await repo.createMember({
      name: "John",
      email: "a@test.com",
      isActive: true
    });

    expect(result.id).toBe("M1");
  });

  test("getAllMembers", async () => {
    const result = await repo.getAllMembers();
    expect(result.length).toBe(1);
  });

  test("getMemberById", async () => {
    const result = await repo.getMemberById("M1");
    expect(result?.name).toBe("John");
  });

  test("updateMember", async () => {
    const result = await repo.updateMember("M1", { name: "Updated" });
    expect(result?.id).toBe("M1");
  });

  test("deleteMember", async () => {
    const ok = await repo.deleteMember("M1");
    expect(ok).toBe(true);
  });
});
